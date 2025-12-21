import React, { useState, useEffect } from 'react'
import './Withdraw.css'
import { toast } from 'react-toastify'

function Withdraw() {
  const coin = Number(localStorage.getItem("coin")) || 0
  const MIN_WITHDRAW = 100
  const FEE = 0.2

  const [balance, setBalance] = useState(coin)
  const [withdrawAmount, setWithdrawAmount] = useState(0)
  const [gameId, setGameId] = useState("")
  const [totalWithdraw, setTotalWithdraw] = useState(0)

  useEffect(() => {
    if (withdrawAmount >= MIN_WITHDRAW) {
      if (withdrawAmount <= balance) {
        setTotalWithdraw(Math.ceil(withdrawAmount / (1 - FEE)))
      } else {
        setTotalWithdraw(0)
        toast.error("Not enough balance")
      }
    } else {
      setTotalWithdraw(0)
      if (withdrawAmount > 0) {
        toast.error(`Minimum withdrawal is ${MIN_WITHDRAW}`)
      }
    }
  }, [withdrawAmount, balance])

  return (
    <div className="withdraw-page">
      <div className="withdraw-card">
        <h1 className="brand">Withdraw - Your Game Balance</h1>
        <p className="info-text">
          Withdraw your balance securely and instantly.
          Choose your preferred payment method, enter the amount, and confirm your request.
          <br />
          <span>Withdrawals are processed automatically and may take a day.</span>
        </p>

        <form className="withdraw-form">
          <div className="field">
            <label className="label-text" htmlFor="withdrawAmount">Withdraw Amount</label>
            <input
              id="withdrawAmount"
              type="number"
              placeholder="0.0G"
              min={MIN_WITHDRAW}
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(Number(e.target.value))}
            />
          </div>

          <div className="field">
            <label className="label-text" htmlFor="gameId">Transaction ID</label>
            <input
              id="gameId"
              type="number"
              placeholder="Enter your ID"
              value={gameId}
              onChange={(e) => setGameId(e.target.value)}
            />
          </div>

          <p className="info-text">Put your skin up for this price</p>
          <p className="price"><strong>{totalWithdraw} G</strong></p>

          <img src="https://i.postimg.cc/zX1t9t3B/flock.png" alt="G22 Flock Skin" className="skin-img" />
          <p className="info-text">
            Get 199 patterns of the G22 Flock skin and sell them at the price shown above.
          </p>

          <button type="button" className="btn">Withdraw Game Balance</button>
        </form>
      </div>
    </div>
  )
}

export default Withdraw
