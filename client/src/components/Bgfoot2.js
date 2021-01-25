import React from "react";
import bgfoot from "../video/bgfoot.mp4";
import "./components.css";
const Bgvideo = () => {
  return (
    <video
      className="bgVideo position-absolute"
      autoPlay={1}
      muted={1}
      loop
      id="myVideo"
      src={bgfoot}
    ></video>
  );
};

export default Bgvideo;
