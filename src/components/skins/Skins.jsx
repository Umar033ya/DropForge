// Skins.jsx
import React from "react";
import "./Skins.css";

function Skins({ data }) {
  return (
    <div className="skins-container">
      {data?.map((item) => {
        const { id, name, type, price, rarity, statTrack } = item;

        return (
          <div className="skin-card" key={id}>
            <div className="skin-image-box">
              <span className={`st-badge ${statTrack ? "st" : "nost"}`}>
                {statTrack ? "ST" : "No ST"}
              </span>

              <span className="price-badge">{price}$</span>

              <div className="skin-img-placeholder">
                <img 
                  src="https://avatars.mds.yandex.net/i?id=c97b4a991220e3b61859305005489fe1451e709c-4080017-images-thumbs&n=13" 
                  alt={name} 
                />
              </div>
            </div>

            <div className="skin-info">
              <h3>{name}</h3>
              <p>{type} • {rarity}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Skins;
