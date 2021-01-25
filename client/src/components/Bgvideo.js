import React from "react";
import bgfoot from "../video/bgfoot.mp4";

const Bgvideo = () => {
  return (
    <video
      className="bgVideo position-absolute rounded"
      autoPlay={1}
      muted={1}
      loop
      id="myVideo"
      src={bgfoot}
    ></video>
  );
};

export default Bgvideo;
