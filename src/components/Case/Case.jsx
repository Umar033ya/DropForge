import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Case.css";

function Case({ skinIds, caseName, caseImg, price }) {
  const [skins, setSkins] = useState([]);
  const navigate = useNavigate();
  const [loader, setloader] = useState(false)
  
const getSkin = async () => {
  setloader(true); 
  try {
    const res = await fetch("https://api.npoint.io/6404427173fedb3ae6b3");
    const data = await res.json();

    const allSkins = Array.isArray(data?.skins) ? data.skins : [];

    const ids = Array.isArray(skinIds) ? skinIds.map(id => Number(id)) : [];

    const filteredSkins = allSkins.filter(skin => ids.includes(Number(skin.id)));

    setSkins(filteredSkins);
  } catch (error) {
    console.error("getSkin error:", error);
    setSkins([]);
  } finally {
    setloader(false);
  }
};

useEffect(() => {
  getSkin();
}, [skinIds]);


  const handleButtonClick = () => {
    navigate("/caseopen", {
      state: { caseName, caseImg, skins, price }
    });
  };


return (
  loader ? (
    <span className="loader" />
  ) : (
    <div
      className="case-box"
      onClick={() => {
        if (skins && skins.length > 0) {
          handleButtonClick();
        }
      }}
      style={{ cursor: skins && skins.length > 0 ? "pointer" : "not-allowed", opacity: skins && skins.length > 0 ? 1 : 0.6 }}
    >
      <img src={caseImg} alt={caseName} className="case-img" />
      <h1 className="case-name">{caseName}</h1>
    </div>
  )
);

}

export default Case;
