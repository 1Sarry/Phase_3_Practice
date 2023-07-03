import React, { useState, useEffect } from "react";

const CountEffect = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(45);
  // useEffect takes 2 args  1.Function    2. array
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count, age]);
  return (
    <div className="valueHolder">
      <h3>The value of count is: {count}</h3>
      <h3>TheValue of age is: {age}</h3>
      <button onClick={() => setCount((count) => count + 1)}>Increment Count</button> <br />
      <button onClick={() => setAge((age) => age + 1)}>Increment Age</button>
    </div>
  );
};

export default CountEffect;
