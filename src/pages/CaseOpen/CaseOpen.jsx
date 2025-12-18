import React, { useEffect } from "react";
import { Navigate, useLocation, useNavigate , } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import { useState } from "react";
import { IoMdExit } from "react-icons/io";
import "./CaseOpen.css";

function CaseOpen() {
  const location = useLocation();
  const state = location.state;
  let coin = JSON.parse(localStorage.getItem("coin"))
  const [coins, setCoins] = useState(coin)
  const { caseName, caseImg, skins, price } = state;
  const navigate = useNavigate();
  const openCase = () =>{
         if(coins >= price){
          setCoins(coins - price)
         }else{
          toast.error("You have not enouht coins")
         }
  }

  useEffect(() =>{
      
  }, [coins])
  return (
    <div className="caseopen-wrapper">
      <IoMdExit onClick={() => navigate("/")} className="exit-icon" />

      <div className="case-header">
        <h1>{caseName}</h1>
        <img src={caseImg} alt={caseName} />
        <button onClick={openCase} className="open-btn">Open {price}G</button>
      </div>

      <div className="skins-container">
        {skins.map(({ id, name, type, rarity, statTrack, price, img }) => (
          <div className="skin-card" key={id}>
            <div className="skin-image-box">
              <span className={`st-badge ${statTrack ? "st" : "nost"}`}>
                {statTrack ? "ST" : "No ST"}
              </span>

              <span className="price-badge">{price}G</span>

              {img ? <img src={img} alt={name} /> : <div>No Image</div>}
            </div>

            <div className="skin-info">
              <h3>{name}</h3>
              <p>{type} • {rarity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CaseOpen;
