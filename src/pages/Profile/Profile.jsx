import React from 'react'
import './Profile.css'
import { CiMoneyCheck1 } from "react-icons/ci";
import { BiMoneyWithdraw } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
function Profile() {
  const userName = localStorage.getItem("username")
  const so2Id = localStorage.getItem("so2id")
  const navigate = useNavigate()
  return (
    <div className="profile">
      <div className="profile-card">
        <div className="profile-header">
          <h1>Your Profile</h1>
          <div className="profile-actions">
            <CiSettings />
            <IoIosLogOut
             onClick={() => {
              localStorage.clear();
               navigate("/login");
               }}
             />
          </div>
        </div>

        <div className="profile-info">
          <h3>Your Name:{userName}</h3>
          <p>Standoff 2 ID: {so2Id}</p>
        </div>

        <div className="profile-buttons">
          <button className="deposit">
            <CiMoneyCheck1 /> Make a deposit
          </button>

          <button className="withdraw">
            <BiMoneyWithdraw /> Withdraw your game balance
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
