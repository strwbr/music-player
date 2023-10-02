import React, { useRef } from "react";
import ProgressBar from "./ProgressBar";
import Controls from "./Controls";
import TrackInfo from "./TrackInfo";
import { tracks } from "../data/tracks";
import ReactAudioPlayer from "react-audio-player";

import { ReactComponent as PlayIcon } from "../assets/icons/play.svg";

const Player = ({ currentTrack }) => {
  const audioPlayerRef = useRef();

  return (
    <div className="audio-player">
      {/* <ReactAudioPlayer src={currentTrack.src} ref={audioPlayerRef} controls /> */}
      <button className="play-btn">
        <PlayIcon />
      </button>
      {/* <TrackInfo />
      <ProgressBar />
      <Controls /> */}
    </div>
  );
};

export default Player;
