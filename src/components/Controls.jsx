import React, { useEffect, useState } from "react";
import { ReactComponent as PlayIcon } from "../assets/icons/play.svg";
import { ReactComponent as PauseIcon } from "../assets/icons/pause.svg";
import { ReactComponent as PlayBackIcon } from "../assets/icons/play_back.svg";
import { ReactComponent as PlayForwardIcon } from "../assets/icons/play_forward.svg";
import { ReactComponent as RepeatIcon } from "../assets/icons/repeat.svg";
import { ReactComponent as ShuffleIcon } from "../assets/icons/shuffle.svg";
import { ReactComponent as PlaySkipBackIcon } from "../assets/icons/play_skip_back.svg";
import { ReactComponent as PlaySkipForwardIcon } from "../assets/icons/play_skip_forward.svg";

import "../styles/controls.css";

const Controls = ({
  audioPlayerRef,
  isRandom,
  setIsRandom,
  handleNextSong,
  currentTrack,
  trackIndex,
  setTrackIndex,
  tracks,
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
    setIsRandom((prev) => !prev);
    console.log("handleShuffle()");
  };

  const handlePlayForward = () => {
    audioPlayerRef.current.audioEl.current.currentTime += 10;
    console.log("handlePlayForward()");
  };

  const handlePlayBack = () => {
    audioPlayerRef.current.audioEl.current.currentTime -= 10;
    console.log("handlePlayBack()");
  };

  useEffect(() => {
    if (isPlaying) {
      audioPlayerRef.current.audioEl.current.play();
    } else {
      audioPlayerRef.current.audioEl.current.pause();
    }
    // nextSong ниже может вызвать ошибки???
    // сюда наверно лучше индекс вместо
  }, [isPlaying, audioPlayerRef, trackIndex]);

  return (
    <div className="controls">
      <button className="controls-btn shuffle" onClick={handleShuffle}>
        <ShuffleIcon />
      </button>
      <button className="controls-btn" onClick={previousSong}>
        <PlaySkipBackIcon />
      </button>
      <button className="controls-btn" onClick={handlePlayBack}>
        <PlayBackIcon />
      </button>
      <button className="controls-btn" onClick={togglePlayPause}>
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
      <button className="controls-btn" onClick={handlePlayForward}>
        <PlayForwardIcon />
      </button>
      <button className="controls-btn" onClick={handleNextSong}>
        <PlaySkipForwardIcon />
      </button>
      <button className="controls-btn">
        <RepeatIcon />
      </button>
    </div>
  );
};

export default Controls;
