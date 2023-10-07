import React from "react";
import { formatTime } from "../utils";
const ProgressBar = ({
  progressBarRef,
  audioPlayerRef,
  timeProgress,
  duration,
}) => {
  return (
    <div className="progress-bar">
      <span>{formatTime(timeProgress)}</span>
      <input
        type="range"
        ref={progressBarRef}
        // defaultValue={0}
        value={timeProgress}
        onChange={(e) => (audioPlayerRef.current.currentTime = e.target.value)}
      />
      <span>{formatTime(duration)}</span>
    </div>
  );
};

export default ProgressBar;
