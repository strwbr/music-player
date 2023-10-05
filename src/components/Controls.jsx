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

const Controls = ({ audioPlayerRef, setIsRandom, nextSong, currentTrack }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Нажатие на кнопку Play/Pause
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (isPlaying) {
      audioPlayerRef.current.audioEl.current.play();
    } else {
      audioPlayerRef.current.audioEl.current.pause();
    }
    // nextSong ниже может вызвать ошибки???
    // сюда наверно лучше индекс вместо
  }, [isPlaying, audioPlayerRef, nextSong]);

  return (
    <div className="controls">
      <button className="controls-btn shuffle">
        <ShuffleIcon />
      </button>
      <button className="controls-btn">
        <PlaySkipBackIcon />
      </button>
      <button className="controls-btn">
        <PlayBackIcon />
      </button>
      <button className="controls-btn" onClick={togglePlayPause}>
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
      <button className="controls-btn">
        <PlayForwardIcon />
      </button>
      <button className="controls-btn" onClick={nextSong}>
        <PlaySkipForwardIcon />
      </button>
      <button className="controls-btn">
        <RepeatIcon />
      </button>
    </div>
  );
};

export default Controls;
