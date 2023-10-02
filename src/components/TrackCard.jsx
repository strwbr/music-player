import React from "react";
import TrackInfo from "./TrackInfo";

const TrackCard = ({ track }) => {
  return (
    <div>
      <TrackInfo track={track} />
      <p>03:56</p>
    </div>
  );
};

export default TrackCard;
