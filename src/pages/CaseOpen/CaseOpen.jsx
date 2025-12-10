import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { IoMdExit } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./CaseOpen.css";

function CaseOpen() {
  const { state } = useLocation();
  const { caseName, caseImg, skins, price } = state;
  const navigate = useNavigate();
  return (
    <div className="caseopen-wrapper">
      <IoMdExit onClick={()=> navigate("/") }  className="exit-icon"/>
      <div className="case-header">
      <h1>{caseName}</h1>
        <img src={caseImg} alt={caseName} />
       
        <button className="open-btn">Open {price}G</button>
      </div>
      <div className="skins-container">
        {skins.map(({ id, name, type, rarity, statTrack, price, img }) => (
          <div className="skin-card" key={id}>
            
            <div className="skin-image-box">
              <span className={`st-badge ${statTrack ? "st" : "nost"}`}>
                {statTrack ? "ST" : "No ST"}
              </span>

              <span className="price-badge">{price}G</span>

              {img ? (
                <img src={img} alt={name} />
              ) : (
                <div className="no-image">No Image</div>
              )}
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
