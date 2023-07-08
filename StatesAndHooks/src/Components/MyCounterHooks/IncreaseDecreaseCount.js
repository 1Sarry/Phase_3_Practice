import React, { useState } from "react";
import "../UseState/counter.css";
import IncreaseDecreaseCounter from "./IncreaseDecreaseCounter";

const IncreaseDecreaseCount = () => {
  const [count, setCount] = useState(0);

  

  return (
    <div>
      <h1>Using useState Hook</h1>
      <IncreaseDecreaseCounter countNum={count} />
      <button onClick={() => setCount((count) => count + 1)}>Increase</button>
      <button onClick={()=> setCount(count - 1)}>Decrease</button>
      <button
      onClick={()=> setCount((count)=> count = 0)}>Reset</button>
    </div>
  );
};

export default IncreaseDecreaseCount;
