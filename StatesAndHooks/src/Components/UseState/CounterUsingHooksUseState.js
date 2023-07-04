// Use rfce snippet to create a functional component
// The ES7 React Snippet lets you do that (Install extension first)
import React, { useState } from "react";

function CounterUsingHooksUseState() {
  // Use Array destructuring and useState
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>A Counter on Click Using States </h1>
        <h2>to call the state:{this.state.state2}</h2>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}

export default CounterUsingHooksUseState;
