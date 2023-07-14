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
import MacPage from "./Pages/MacPage";
import Ipodpage from "./Pages/Ipodpage";
import Tv from "./Pages/Tv";
import Music from "./Pages/Music";
import Support from "./Pages/Support";
import Watch from "./Pages/Watch";
import { Erorr } from "./Pages/Erorr";
import SharedLayout from "./Components/Common/SharedLayout";

function App() {
  return (
    <Routes>
      {" "}
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/iphone" element={<Iphones />} />
        <Route path="/mac" element={<MacPage />} />
        <Route path="/ipod" element={<Ipodpage />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/music" element={<Music />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<Erorr />} />
      </Route>
    </Routes>
  );
}

export default App;
