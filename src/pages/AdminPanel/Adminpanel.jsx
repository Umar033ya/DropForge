import React, { lazy } from 'react'
import './Adminpanel.css'
import df from '../../../public/DF.png'
function Adminpanel() {
  const data = JSON.parse(localStorage.getItem("admin"))
  return (
    <div>
      <header>
        <nav>
          <img src={df} alt="" />
          <div className="price_div">
              <p>G {data.overcoin}</p>
              <i class="fa-solid fa-plus"></i>
            </div>
        </nav>
      </header>
  
    </div>
  )
}

export default Adminpanel