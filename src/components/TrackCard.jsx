import React from "react";
import TrackInfo from "./TrackInfo";

import "../styles/track-card.css";

const TrackCard = ({ track, onChoose }) => {
  return (
    <div className="clicked" onClick={onChoose}>
      <TrackInfo track={track} />
      <p>03:56</p>
    </div>
  );
};

export default TrackCard;
