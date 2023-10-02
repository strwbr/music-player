import React, { useRef } from "react";
import ProgressBar from "./ProgressBar";
import Controls from "./Controls";
import TrackInfo from "./TrackInfo";
import ReactAudioPlayer from "react-audio-player";

const Player = ({ currentTrack }) => {
  const audioPlayerRef = useRef();

  return (
    <div className="audio-player">
      {/* <ReactAudioPlayer src={currentTrack.src} ref={audioPlayerRef} controls /> */}
      <TrackInfo track={currentTrack} />
      <ProgressBar />
      <Controls />
    </div>
  );
};

export default Player;
