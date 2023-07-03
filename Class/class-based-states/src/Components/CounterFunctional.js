import React, { useState } from "react";

const CounterFunctional = () => {
  //useState(0);
  // [0, ()=>{}], what useState return...the initial value we gave as an argument and anonimous function
  //the function helps us to change the initial value we gave for the useState function (0 in this case)
  // const [a, b ] = useState(0)

  // use Array destructuring
  const [count, setCount] = useState(0);
  // setCount is in this case called updater method
  return (
    <div>
      <button onClick={()=> setCount((count)=> count + 1 )}>Count: {count}</button>
    </div>
  );
};

export default CounterFunctional;
