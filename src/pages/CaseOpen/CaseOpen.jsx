import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { IoMdExit } from "react-icons/io";
import "./CaseOpen.css";

function CaseOpen() {
  const location = useLocation();
  const navigate = useNavigate();

  const { caseName, caseImg, skins, price } = location.state;

  const savedCoin = JSON.parse(localStorage.getItem("coin")) || 0;

  const [coins, setCoins] = useState(savedCoin);
  const [isOpening, setIsOpening] = useState(false);
  const [winner, setWinner] = useState(null);
  const [rollingSkins, setRollingSkins] = useState([]);
  const [sold, setSold] = useState(false);
   const userId =  localStorage.getItem("userId")

  const getRandomSkin = () => {
    const index = Math.floor(Math.random() * skins.length);
    return skins[index];
  };
  const openCase = () => {
    if (coins < price) {
      toast.error("You have not enough coins");
      return;
    }

    setCoins(prev => prev - price);
    setIsOpening(true);
    setWinner(null);
    setSold(false);

    let temp = [];
    for (let i = 0; i < 25; i++) {
      temp.push(getRandomSkin());
    }
    setRollingSkins(temp);

    setTimeout(() => {
      const win = getRandomSkin();
      setWinner(win);
      setIsOpening(false);
    }, 3000);
  };
  const sellSkin = async () => {
    if (!winner || sold) return;

    const newCoins = coins + winner.price;
    setCoins(newCoins);
    setSold(true);
    try {
      await axios.put(`https://68c65fd9442c663bd026db89.mockapi.io/users/${userId}`, {coin:newCoins})
    } catch (error) {
      console.log(error);
    }
    toast.success(`Sold for ${winner.price}G`);
  };
  useEffect(() => {
    localStorage.setItem("coin", JSON.stringify(coins));
  }, [coins]);

  return (
    <div className="caseopen-wrapper">
    <IoMdExit 
  onClick={() => navigate("/")} 
  size={50}  
  color="red" 
  className="exit-icon" 
/>


      <div className="case-header">
        <h1>{caseName}</h1>

        {!isOpening && !winner && (
          <img src={caseImg} alt={caseName} />
        )}

        {isOpening && (
          <div className="roll-container">
            <div className="roll-track">
              {rollingSkins.map((skin, i) => (
                <div className="roll-skin" key={i}>
                  <img src={skin.img} alt={skin.name} />
                  <p>{skin.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {winner && (
          <div className="winner-box">
            <h2>You won 🎉</h2>
            <img src={winner.img} alt={winner.name} />
            <h3>{winner.name}</h3>
          </div>
        )}
        {!winner && (
          <button onClick={openCase} className="open-btn">
            Open {price}G
          </button>
        )}

        {winner && !sold && (
          <button onClick={sellSkin} className="open-btn">
            Sell for {winner.price}G
          </button>
        )}

        {sold && (
          <button className="open-btn" disabled>
            Sold ✔
          </button>
        )}
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
