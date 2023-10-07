import React from "react";

const ProgressBar = ({
  progressBarRef,
  audioPlayerRef,
  timeProgress,
  duration,
}) => {
  const handleProgressTimeChange = () => {
    // audioPlayerRef.current.audioEl.current.currentTime =
    //   progressBarRef.current.value;
    audioPlayerRef.current.currentTime = progressBarRef.current.value;
  };

  return (
    <div className="progress-bar">
      <span>01:15</span>
      <input
        type="range"
        ref={progressBarRef}
        // defaultValue={0}
        value={timeProgress}
        onChange={(e) => (audioPlayerRef.current.currentTime = e.target.value)}
      />
      <span>03:56</span>
    </div>
  );
};

export default ProgressBar;
