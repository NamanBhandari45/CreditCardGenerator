import React, { useState } from "react";
import   "../App.css";

function CreditCard(props){

    const defaultCardNo = "0000 0000 0000 0000";
    const defaultName = "CARDHOLDER NAME";
    const defaultMM = "00";
    const defaultYY = "00";
    const defaultCVC = "***";
  
    const cardNo = props.cardNo || defaultCardNo;
    const name = props.name || defaultName;
    const mm = props.mm || defaultMM;
    const yy = props.yy || defaultYY;
    const cvc = props.cvc || defaultCVC;

    return(
    <div>
       <div className="frontCard">
            <div className="circle"></div>
            <div className="circle2"></div>
            <h1 className="card-number">{cardNo}</h1>
            <div className="cardinfo">
                <span>{name}</span>
                <span className="exp">{mm}/{yy}</span>
            </div>
       </div>
       <div className="backCard">
          <span className="cvNo">{cvc}</span>
       </div>
    </div>  
    )
}

export default CreditCard;