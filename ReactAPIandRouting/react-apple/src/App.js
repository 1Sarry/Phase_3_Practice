import "./App.css";
import Alert from "./Components/Alert/Alert";
import Ipod from "./Components/Ipod/Ipod";
import MacBook from "./Components/MacBook/MacBook";
import Iphone11 from "./Components/Iphone11/Iphone11";
import AppleCard from "./Components/ProductCards/AppleCard";
import GameCard from "./Components/ProductCards/GameCard";
import TvRow from "./Components/ProductCards/TvRow";
import Footer from "./Components/Common/Footer/Footer";
import Navbar from "./Components/Common/Navbar/Navbar";
import YoutubeVideos from "./Components/YoutubeVideos/YoutubeVideos";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Iphones from "./Pages/Iphones";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iphone" element={<Iphones/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
