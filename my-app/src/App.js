import React, { useState } from 'react';
import './App.css';

function App() {
const[error,seterror] = useState();

const [cardValues, setCardValues] = useState({
   name:"",
   cardno:"",
   mm:"",
   yy:"",
   cvc:""
})

const handleChange = (e) =>{
  const { name, value } = e.target;

    
   setCardValues({
    ...cardValues,
    [name]:value
   }
   )

}

function handleClick(e){

  if(cardValues.name.length === 0){
    seterror(true)
  }

  if(cardValues.cardno.length === 0){
    seterror(true)
  }

  if(cardValues.cvc.length === 0){
    seterror(true)
  }
    console.log(cardValues);

  e.preventDefault();
}

  return (
    <div className='container'>
        <div className='left-div'>
        </div>
        <div className='right-div'>
          <form onSubmit={handleClick}>
            <p className='text'>CARDHOLDER NAME</p>
             <input className='inputfield1' type='text' name='name' placeholder='e.g. Jane Appleseed' onChange={handleChange} value={cardValues.name}></input>
            {error && cardValues.name.length <= 0 ? <label htmlFor='name'>Cardholder name can't be empty</label> : ""}
            <p className='text'>CARD NUMBER</p>
            <input className='inputfield1' type='text'  name='cardno'  value={cardValues.cardno} placeholder='e.g. 1234 5678 9123 0000' onChange={handleChange}></input>
           {error && cardValues.cardno.length <=0 ?  <label htmlFor='cardNo'>Card number required</label> : ""}
            <div className='expDate'>
              <span className='text'>EXP.DATE (MM/YY)</span>
              <span className='text cvc'>CVC</span>
            </div>
            <div className='expdateInput'>
              <input className='inputfield2' name='mm' placeholder='MM'  value={cardValues.mm} onChange={handleChange}></input>
              <input className='inputfield2 YY' name='yy' placeholder='YY'  value={cardValues.yy} onChange={handleChange}></input>
              <input className='inputfield3 cvcinput' name='cvc' placeholder='e.g. 123'  value={cardValues.cvc} onChange={handleChange}></input>
            </div>
          {error && cardValues.cvc.length <=0 ? <label htmlFor='cvc' className='cvclabel'>CVC must be numeric</label> : ""}
            <button type='submit' onClick={handleClick}>Confirm</button>
          </form>
        </div>
    </div>
  );
}

export default App;
