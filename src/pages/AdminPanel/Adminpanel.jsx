import React, { useState } from 'react'
import './Adminpanel.css'
import df from '../../../public/DF.png'
import { Outlet, Link, useNavigate } from 'react-router-dom'

function Adminpanel() {
  const navigate = useNavigate()
  const [admin, setAdmin] = useState(() => {
    const saved = localStorage.getItem("admin")
    return saved ? JSON.parse(saved) : { overcoin: 0 }
  })

  const handleLogout = () => {
    localStorage.clear()
    navigate('/login')
  }

  return (
    <div>
      <header>
        <nav>
          <img src={df} alt="Logo" />
          <div className="price_div">
            <p>G {admin.overcoin}</p>
            <i className="fa-solid fa-plus"></i>
          </div>
          <button className="exit-btn" onClick={handleLogout}>Exit</button>
        </nav>
      </header>

      <main>
        <section className="admin-section">
          <h1>Admin Panel</h1>
          <div className="button-group">
            <Link to="order">
              <button className="admin-btn">Completing orders</button>
            </Link>
            <Link to="instruction">
              <button className="admin-btn">Instructions for Fulfilling Orders</button>
            </Link>
            <Link to="rank">
              <button className="admin-btn">Site Statistics</button>
            </Link>
          </div>
        </section>

        <Outlet context={{ admin, setAdmin }} />
      </main>
    </div>
  )
}

export default Adminpanel
