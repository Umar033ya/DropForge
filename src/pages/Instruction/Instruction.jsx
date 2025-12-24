import React from 'react'
import './Instruction.css'
import { FaGamepad, FaCheckCircle, FaUserShield } from "react-icons/fa";

function Instruction() {
  return (
    <div className="instruction-page">
      <div className="instruction-card">
        <h1>
          <FaGamepad /> How to Fulfill Orders
        </h1>
        <p className="intro">
          Follow these steps carefully to process customer orders efficiently.
        </p>

        <ol className="instruction-list">
          <li>
            <span>Step 1:</span> Open the Standoff2 game on your device.
          </li>
          <li>
            <span>Step 2:</span> Check the customer's game ID in Standoff2 to ensure it is valid.
          </li>
          <li>
            <span>Step 3:</span> Verify the customer's name matches the provided ID.
          </li>
          <li>
            <span>Step 4:</span> Access the specified skin (G22 Flock) in your inventory.
          </li>
          <li>
            <span>Step 5:</span> Locate the exact pattern for the customer's item.
          </li>
          <li>
            <span>Step 6:</span> Confirm the pattern and compare with the customer's avatar and price.
          </li>
          <li>
            <span>Step 7:</span> Purchase the skin at the agreed price.
          </li>
          <li>
            <span>Step 8:</span> Once completed, mark the order as <FaCheckCircle className="icon-done"/> Done on the website.
          </li>
        </ol>

        <p className="note">
          Always double-check each step to avoid mistakes. <FaUserShield className="icon-safe"/> Happy trading!
        </p>
      </div>
    </div>
  )
}

export default Instruction
