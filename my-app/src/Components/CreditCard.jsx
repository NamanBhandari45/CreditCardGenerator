import React from "react";
import   "../App.css";


function CreditCard(props){
   

    const defaultCardNo = "0000000000000000";
    const defaultName = "CARDHOLDER NAME";
    const defaultMM = "MM";
    const defaultYY = "YY";
    const defaultCVC = "***";
  
    const cardNo = props.cardNo || defaultCardNo;
    const name = props.name || defaultName;
    const mm = props.mm || defaultMM;
    const yy = props.yy || defaultYY;
    const cvc = props.cvc || defaultCVC;
  
    const formatCardNumber = (cardNo) => {
        const formattedCardNo = cardNo.match(/.{1,4}/g).join(" ");
        return formattedCardNo;
      };
    
    return(
    <div>
       <div className="frontCard">
            <div className="circle"></div>
            <div className="circle2"></div>
            <h1 className="card-number">{formatCardNumber(cardNo)}</h1>
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