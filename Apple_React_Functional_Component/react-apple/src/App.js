import logo from "./logo.svg";
import "./App.css";
import Alert from "./Components/Alert/Alert";
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Ipod from "./Components/Ipod/Ipod";
import MacBook from "./Components/MacBook/MacBook";
import Iphone11 from "./Components/Iphone11/Iphone11";
import AppleCard from "./Components/ProductCards/AppleCard";
import GameCard from "./Components/ProductCards/GameCard";
import TvRow from "./Components/ProductCards/TvRow";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Alert />
      <Ipod/>
      <MacBook/>
      <Iphone11/>
      <AppleCard/>
      <GameCard/>
      <TvRow/>
      <Footer/>
    </div>
  );
}

export default App;
