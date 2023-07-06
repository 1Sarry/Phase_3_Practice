import React from "react";
import { MyContext } from "../../App";

const Component3 = () => {
  return (
    <div>
      <MyContext.Consumer>{(data)=> {
        return (
            <div>
                <h1>The last child</h1>
                <p>Using Context API: {data}</p>
            </div>
        )
      }}</MyContext.Consumer>
    </div>
  );
};

export default Component3;
