import React, { useState, useEffect } from "react";
import "./UseEffect/effects.css";
import IncreaseDecreaseCounter from "./MyCounterHooks/IncreaseDecreaseCounter";

const UseEffectTitle = () => {

  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    alert (`Component Mount`);
  }, []);

  useEffect(() => {
    document.title = `( ${count} ) Counts`;
  }, [count]);


  return (

    
    <div className="container-effect">
      <h1>Using useEffect Hook</h1>
      <button
        className="effect-btn"
        onClick={() => setCount((count) => count + 1)}
      >
        Increment
      </button>
      <IncreaseDecreaseCounter countNum={count} />
    </div>
    
  );

};


export default UseEffectTitle;
