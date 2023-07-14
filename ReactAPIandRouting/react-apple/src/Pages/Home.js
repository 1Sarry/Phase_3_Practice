import React from "react";
import Alert from "../Components/Alert/Alert";
import Ipod from "../Components/Ipod/Ipod";
import MacBook from "../Components/MacBook/MacBook";
import Iphone11 from "../Components/Iphone11/Iphone11";
import AppleCard from "../Components/ProductCards/AppleCard";
import TvRow from "../Components/ProductCards/TvRow";
import YoutubeVideos from "../Components/YoutubeVideos/YoutubeVideos";

const Home = () => {
  return (
    <>
      <Alert />
      <Ipod />
      <MacBook />
      <Iphone11 />
      <AppleCard />
      <TvRow />
      {/* <YoutubeVideos /> */}
    </>
  );
};

export default Home;
