import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Case.css";

function Case({ skinIds, caseName, caseImg , price}) {
  const [skins, setSkins] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.npoint.io/6404427173fedb3ae6b3")
      .then(res => res.json())
      .then(data => {
        const filteredSkins = data.skins.filter(skin => skinIds.includes(skin.id));
        setSkins(filteredSkins);
      })
      .catch(err => console.error(err));
  }, [skinIds]);

  const handleButtonClick = () => {
    navigate("/caseopen", {
      state: {
        caseName,
        caseImg,
        skins,
        price
      }
    });
  };

  return (
    <div className="case-box" onClick={handleButtonClick}>
      <img src={caseImg} alt={caseName} className="case-img" />
      <h1 className="case-name">{caseName}</h1>
    </div>
  );
}

export default Case;
