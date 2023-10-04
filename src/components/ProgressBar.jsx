import React from "react";

const ProgressBar = () => {
  return (
    <div className="progress-bar">
      <span>01:15</span>
      <input type="range" defaultValue={0} />
      <span>03:56</span>
    </div>
  );
};

export default ProgressBar;
