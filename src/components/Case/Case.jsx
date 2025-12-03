import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./Case.css";
import CaseOpen from "../../pages/CaseOpen/CaseOpen";
function Case({ skinIds, caseName, caseImg }) {
  const [skins, setSkins] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("https://api.npoint.io/6404427173fedb3ae6b3")
      .then(res => res.json())
      .then(data => {
        const filteredSkins = data.skins.filter(skin => skinIds.includes(skin.id));
        setSkins(filteredSkins);
      })
      .catch(err => console.error(err));
  }, [skinIds]);

  const handleButtonClick = (e) => {
    e.preventDefault()
    setOpen(true);
  };
   if(open === true){
   return <Navigate replace to={"/caseopen"}/>
   }
  return (

    <div className="case-box" onClick={handleButtonClick}>
    <img src={caseImg} alt={caseName} className="case-img" />
    <h1 className="case-name">{caseName}</h1>

    <CaseOpen 
       style={{ display:"none" }} 
       caseName={caseName} 
       caseImg={caseImg} 
       skins={skins}
    />
  </div>
   
  );
}

export default Case;
