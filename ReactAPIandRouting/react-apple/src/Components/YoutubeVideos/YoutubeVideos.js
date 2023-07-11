import React, { useState, useEffect } from "react";
import "./YoutubeVideos.css";

const YoutubeVideos = () => {
  const [youTubeVids, setYouTubeVid] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyB6kv9IqTK4jK9rwjE3E-Or8ZbFx5kzgMA&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9"
    )
      .then((response) => response.json())
      .then((data) => {
        const youTubeData = data.items;
        setYouTubeVid(youTubeData);
      });
  }, []);

  //console.log(youTubeVids);
  return (
    <div>
      <div className="container-fluid container  ">
        <h1 className="title-wraper bold black py-4 text-center">Latest Videos</h1>
        <div className="video-card-wrapper ">
          {youTubeVids.map((vidData) => {
            let vidLink = `https://www.youtube.com/watch?v=${vidData.id.videoId}`;
            return (
              <div key={vidData.id.videoId} className="vid-card">
                <div className="tumbnails">
                  <a href={vidLink}>
                    <img src={vidData.snippet.thumbnails.default.url} alt="" />
                  </a>
                </div>
                <div>
                  <div className=" black title-wraper">
                    <a href={vidLink}>{vidData.snippet.title}</a>
                  </div>
                  <div className="gray description-wrapper">
                    <a href={vidLink} className="">
                      {vidData.snippet.description}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="vid-card">2</div>
          <div className="vid-card">3</div> */}
      </div>
    </div>
  );
};

export default YoutubeVideos;
