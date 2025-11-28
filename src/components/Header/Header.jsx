import React from 'react'
import './Header.css'
import logo from '../../../public/DF.png'

function Header({coin}) {
  return (
    <header>
        <div className="container">
            <nav>
                <div className="nav__left">
                    <img src={logo} alt="logo" />
                    <select>
                        <option value="standoff2">Standoff 2</option>
                        <option value="cs2">CS 2</option>
                    </select>
                </div>
                <div className="nav__end">
                    <div className="price_div">
                        <p>G {coin}</p>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <div className="avatar">
                    <i class="fa-solid fa-circle-user"></i>
                    </div>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header