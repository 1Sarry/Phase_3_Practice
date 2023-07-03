import logo from "./logo.svg";
import "./App.css";
import ClassState from "./Components/ClassState";
import CountterState from "./Components/CountterState";
import CounterFunctional from "./Components/CounterFunctional";
import CountEffect from "./Components/CountEffect";
import Component1 from "./Components/useEffect/Component1";
import React from "react";



export const MyContext = React.createContext();

function App() {
  return (
    <div className="App">
      <ClassState />
      <CountterState />
      <CounterFunctional />
      <CountEffect />
      <MyContext.Provider value={"Abe Beso Beltual"}>
        <Component1 
        
        />
      </MyContext.Provider>
    </div>
  );
}

export default App;
