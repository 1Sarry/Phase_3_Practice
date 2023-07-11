import React from "react";
import "./App.css";
// Class Based State Example
import ClassStateExample from "./Components/ClassStateExample/ClassStateExample";
// Counter using class
import CounterUsingClassState from "./Components/ClassStateExample/CounterUsingClassState";

// Life cycle with Class States
import UsingClassLifeCycleComponent from "./Components/ClassStateExample/UsingClassLifeCycleComponent";
// Counter using useState
import CounterUsingHooksUseState from "./Components/UseState/CounterUsingHooksUseState";
// useState callback example
import CounterIncrementDecrement from "./Components/UseState/CounterIncrementDecrement";
// useEffect
import UsingUseEffect from "./Components/UseEffect/UsingUseEffect";
// Context API with out hooks
import Component1 from "./Components/UseContext/Component1";
// useContext
import UsingUseContext from "./Components/UseContext/UsingUseContext";

// import IncreaseDecreaseCounter from "./Components/MyCounterHooks/IncreaseDecreaseCounter";
import MyCounter from "./Components/MyCounter/MyCounter";
import IncreaseDecreaseCount from "./Components/MyCounterHooks/IncreaseDecreaseCount";
import UseEffectTitle from "./Components/UseEffectTitle";
import ClassPractice from "./Components/ClassPractice";

// First creat context
export const MyContext = React.createContext();
function App() {
  return (
    <div className="App">
      <MyCounter />
      <IncreaseDecreaseCount /> 
      {/* <UseEffectTitle/> */}
      <ClassPractice/>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <MyContext.Provider value={"The data you want to pass"}>
//         <Component1 />
//       </MyContext.Provider>
//     </div>
//   );
// }

export default App;
