import React, { useState, useEffect } from 'react'
import './Order.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { MdOutlineDoneOutline, MdReportProblem } from "react-icons/md"
import { useOutletContext } from 'react-router-dom'

function Order() {
  const [loader, setLoader] = useState(false)
  const [data, setData] = useState([])

  const { admin, setAdmin } = useOutletContext()

  const getOrderdetails = async () => {
    setLoader(true)
    try {
      let res = await axios.get("https://689dcd78ce755fe6978a0e23.mockapi.io/ToDoListApi/devliver")
      setData(res.data)
    } catch (error) {
      console.log(error)
      toast.error("Failed to fetch orders")
    } finally {
      setLoader(false)
    }
  }

  const deleteOrder = async (id, price) => {
    try {
      await axios.delete(`https://689dcd78ce755fe6978a0e23.mockapi.io/ToDoListApi/devliver/${id}`)

      setData(prev => prev.filter(item => item.id !== id))
      setAdmin(prev => {
        const updated = { ...prev, overcoin: prev.overcoin - price }
        localStorage.setItem("admin", JSON.stringify(updated))
        return updated
      })

      toast.success("Order completed! Coins deducted")
    } catch (error) {
      console.log(error)
      toast.error("Failed to complete order")
    }
  }

  useEffect(() => {
    getOrderdetails()
  }, [])

  return (
    <div className='order-page'>
      {loader ? (
        <span className="loader"></span>
      ) : (
        <div className='order-container'>
          {data.map((item, index) => (
            <div className='order-card' key={item.id || index}>
              <h3>Name: {item.name}</h3>
              <p>Game Id: {item.so2id}</p>
              <p>Gun pattern: {item.gunsPatern}</p>
              <p>Price: {item.buyvalue} G</p>
              <div className='order-icons'>
                <MdOutlineDoneOutline
                  onClick={() => deleteOrder(item.id, item.buyvalue)}
                  className="icon done"
                />
                <MdReportProblem className="icon problem"/>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Order
