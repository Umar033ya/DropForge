import React, { useState, useEffect } from 'react'
import './Withdraw.css'
import { toast } from 'react-toastify'
import axios from 'axios'

function Withdraw() {
  const MIN_WITHDRAW = 100
  const FEE = 0.2 // 20%

  const [balance, setBalance] = useState(
    Number(localStorage.getItem('coin')) || 0
  )
  const [withdrawAmount, setWithdrawAmount] = useState(0)
  const [gameId, setGameId] = useState('')
  const [totalWithdraw, setTotalWithdraw] = useState(0)
  const [gunsPatern, setGunsPatern] = useState('')

  const name = localStorage.getItem('username')

  // ✅ FAQAT HISOBLAYDI (LIMIT YO‘Q)
  useEffect(() => {
    if (!withdrawAmount || withdrawAmount < MIN_WITHDRAW) {
      setTotalWithdraw(0)
      return
    }

    // 100 → 125 (20% fee teskari hisob)
    const result = Math.ceil(withdrawAmount / (1 - FEE))
    setTotalWithdraw(result)

  }, [withdrawAmount])

  const postApi = async (e) => {
    e.preventDefault()

    // ❗ BALANCE FAQAT SUBMIT PAYTIDA TEKSHIRILADI
    if (withdrawAmount < MIN_WITHDRAW) {
      toast.error(`Minimum withdrawal is ${MIN_WITHDRAW} G`)
      return
    }

    if (withdrawAmount > balance) {
      toast.error('Insufficient balance')
      return
    }

    if (!gameId) {
      toast.error('Please enter your Transaction ID')
      return
    }

    if (!gunsPatern) {
      toast.error("Please enter Gun's Pattern")
      return
    }

    const postValue = {
      name,
      so2id: gameId,
      buyvalue: totalWithdraw,
      gunsPatern: gunsPatern,
    }

    try {
      await axios.post(
        'https://689dcd78ce755fe6978a0e23.mockapi.io/ToDoListApi/devliver',
        postValue
      )

      toast.success('Withdraw request sent successfully')

      const newBalance = balance - withdrawAmount
      setBalance(newBalance)
      localStorage.setItem('coin', String(newBalance))

      setWithdrawAmount(0)
      setGameId('')
      setGunsPatern('')
    } catch (error) {
      toast.error('Something went wrong')
      console.log(error)
    }
  }

  return (
    <div className="withdraw-page">
      <div className="withdraw-card">
        <h1 className="brand">Withdraw Game Balance</h1>

        <p className="info-text">
          Withdraw your game balance quickly and securely.
          <br />
          Enter the amount and your transaction ID to continue.
          <br />
          <span>Withdrawals are processed automatically (up to 24 hours).</span>
        </p>

        <form onSubmit={postApi} className="withdraw-form">
          <div className="field">
            <label className="label-text">Withdraw Amount</label>
            <input
              type="number"
              placeholder="Enter amount (G)"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(Number(e.target.value))}
            />
          </div>

          <div className="field">
            <label className="label-text">Transaction ID</label>
            <input
              type="number"
              placeholder="Enter your game ID"
              value={gameId}
              onChange={(e) => setGameId(e.target.value)}
            />
          </div>

          <div className="field">
            <label className="label-text">Gun's Pattern</label>
            <input
              type="number"
              placeholder="Enter Guns Pattern"
              value={gunsPatern}
              onChange={(e) => setGunsPatern(e.target.value)}
            />
          </div>

          <p className="info-text">Put your skin on sale for this price:</p>

          <p className="price">
            <strong>{totalWithdraw} G</strong>
          </p>

          <img
            src="https://i.postimg.cc/zX1t9t3B/flock.png"
            alt="G22 Flock Skin"
            className="skin-img"
          />

          <p className="info-text">
            Purchase <strong>G22 Flock</strong> skin patterns and list them
            for the price shown above to complete your withdrawal.
          </p>

          <button type="submit" className="btn">
            Withdraw Game Balance
          </button>
        </form>
      </div>
    </div>
  )
}

export default Withdraw
