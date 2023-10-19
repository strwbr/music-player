import React, { useEffect, useState } from "react";
import { ReactComponent as PlayIcon } from "../assets/icons/play.svg";
import { ReactComponent as PauseIcon } from "../assets/icons/pause.svg";
// import { ReactComponent as PlayBackIcon } from "../assets/icons/play_back.svg";
// import { ReactComponent as PlayForwardIcon } from "../assets/icons/play_forward.svg";
import { ReactComponent as RepeatIcon } from "../assets/icons/repeat.svg";
import { ReactComponent as RepeatClickedIcon } from "../assets/icons/repeat-clicked.svg";
import { ReactComponent as ShuffleIcon } from "../assets/icons/shuffle.svg";
import { ReactComponent as ShuffleClickedIcon } from "../assets/icons/shuffle-clicked.svg";
import { ReactComponent as SkipIcon } from "../assets/icons/play_skip_back.svg";
// import { ReactComponent as PlaySkipBackIcon } from "../assets/icons/play_skip_back.svg";
// import { ReactComponent as PlaySkipForwardIcon } from "../assets/icons/play_skip_forward.svg";
import { ReactComponent as RewindIcon } from "../assets/icons/rewind.svg";
import "../styles/controls.css";

const Controls = ({
  audioPlayerRef,
  isRandom,
  setIsRandom,
  handleNextSong,
  trackIndex,
  setTrackIndex,
  tracks,
  isLoop,
  setLoop,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Нажатие на кнопку Play/Pause
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
    console.log("togglePlayPause()");
  };

  const previousSong = () => {
    setTrackIndex((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
    console.log("previousSong()");
  };

  const handleShuffle = () => {
    console.log(isRandom);
    setIsRandom((prev) => !prev);
    console.log("handleShuffle()");
  };

  const handlePlayForward = () => {
    // audioPlayerRef.current.audioEl.current.currentTime += 10;
    audioPlayerRef.current.currentTime += 10;
    console.log("handlePlayForward()");
  };

  const handlePlayBack = () => {
    // audioPlayerRef.current.audioEl.current.currentTime -= 10;
    audioPlayerRef.current.currentTime -= 10;
    console.log("handlePlayBack()");
  };

  const handleLooping = () => {
    setLoop((prev) => !prev);
    console.log("handleLooping()");
  };

  useEffect(() => {
    if (isPlaying) {
      // audioPlayerRef.current.audioEl.current.play();
      audioPlayerRef.current.play();
    } else {
      // audioPlayerRef.current.audioEl.current.pause();
      audioPlayerRef.current.pause();
    }
  }, [isPlaying, audioPlayerRef, trackIndex]);

  return (
    <div className="controls">
      <button className="controls-btn" onClick={handleShuffle}>
        {isRandom ? <ShuffleClickedIcon /> : <ShuffleIcon />}
      </button>
      <button className="controls-btn btn-hover" onClick={previousSong}>
        {/* <PlaySkipBackIcon /> */}
        <SkipIcon />
      </button>
      <button className="controls-btn btn-hover" onClick={handlePlayBack}>
        {/* <PlayBackIcon /> */}
        <RewindIcon />
      </button>
      <button className="controls-btn btn-hover" onClick={togglePlayPause}>
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
      <button
        className="controls-btn btn-hover reflected"
        onClick={handlePlayForward}
      >
        {/* <PlayForwardIcon /> */}
        <RewindIcon />
      </button>
      <button
        className="controls-btn btn-hover reflected"
        onClick={handleNextSong}
      >
        {/* <PlaySkipForwardIcon /> */}
        <SkipIcon />
      </button>
      <button className="controls-btn" onClick={handleLooping}>
        {isLoop ? <RepeatClickedIcon /> : <RepeatIcon />}
      </button>
    </div>
  );
};

export default Controls;
