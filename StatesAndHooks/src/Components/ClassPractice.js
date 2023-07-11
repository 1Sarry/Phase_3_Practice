import React, { useState } from "react";

function ClassPractice() {
  const [type, setType] = useState("Nothing to Show");
  const [count, setCount] = useState(0);

  
  function show(e) {
    setType(e.target.value);
  }

  function increase() {
    setCount((count) => count + 1);
  }
  return (
    <div>
      <h1>Home Edited</h1>
      <div>{type ? type : "Nothing to show"}</div>
      
      <div>
        <label htmlFor="">Type Here</label>
        <input type="text" onChange={show}></input>
      </div>



      <div>{count ? count : "Start Counting"}</div>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default ClassPractice;
