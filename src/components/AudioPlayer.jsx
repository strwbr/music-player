import React from "react";
import ProgressBar from "./ProgressBar";
import Controls from "./Controls";
import TrackInfo from "./TrackInfo";
import AudioPlayer from "react-h5-audio-player";
import { tracks } from "../data/tracks";

const Player = ({ currentTrack }) => {
  return (
    <div className="audio-player">
      <AudioPlayer
        header={`Now playing: ${tracks[0].title}`}
        src={tracks[0].src}
        onPlay={() => console.log("onPlay")}
        onClickNext={() => console.log("onClickNext")}
      />
      {/* <TrackInfo />
      <ProgressBar />
      <Controls /> */}
    </div>
  );
};

export default Player;
