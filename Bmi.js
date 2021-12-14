import React, { useState } from "react";

export default function Bmi() {
 const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [bmiResult, setBmiResult] = useState("");

  const [status, setStatus] = useState("");

  function calculateBMI() {
    let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
    
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);
    
    setStatus(bmiStatus);
    
    setHeight("");
    
    setWeight("");
  }

  function getStatus(bmi) {
    if (bmi < 18.5)
         return "Underweight";
    else if(bmi >= 18.5 && bmi < 24.9)
         return "Normal";
    else if(bmi >= 25 && bmi < 29.9) 
        return "Overweight";
     else 
         return "Obese";
  }

  const style = {
    color: 'black',
    fontSize: 20
  };

  return (
    <>
       <div className="bmi">
        <h1>BMI CALCULATOR</h1>
        <div className="input">
          <span >HEIGHT</span> <br/>
          <input  type="text" placeholder="in cm" value={height} onChange={(e) => {setHeight(e.target.value);}}></input>
          <br/>
          <span>WEIGHT</span><br/>
          <input type="text" placeholder="in kg" value={weight} onChange={(e) => {setWeight(e.target.value);}}></input>
        
        </div>
        <span className="button">
          <button onClick={calculateBMI}> CACLULATE BMI </button>
        </span>
      
      </div>
      
      <div className="check-result">{bmiResult && (
          <div>
            <h2 style={style}>Your BMI is {bmiResult}</h2>
            <h2 style={style}>You are {status}</h2>
          </div>
        )}
      </div>
    </>
  );
}
