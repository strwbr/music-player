import React from "react";
import { formatTime } from "../utils";
import "../styles/progress-bar.css";

const ProgressBar = ({
  progressBarRef,
  audioPlayerRef,
  timeProgress,
  duration,
}) => {
  const handleChange = (e) => {
    const currentValue = e.target.value;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(currentValue / duration) * 100}%`
    );
    audioPlayerRef.current.currentTime = currentValue;
  };

  return (
    <div className="progress-bar">
      <span>{formatTime(timeProgress)}</span>
      <input
        type="range"
        ref={progressBarRef}
        // defaultValue={0}
        value={timeProgress}
        onChange={(e) => handleChange(e)}
      />
      <span>{formatTime(duration)}</span>
    </div>
  );
};

export default ProgressBar;
