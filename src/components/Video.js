import React, { useRef, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./Video.css";

function Video({
  name,
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideo = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={onVideo}
        ref={videoRef}
        src={url}
      ></video>
      <Header name={name} />
      <Footer channel={channel} description={description} song={song} />
      <Sidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;
