import React from "react";
import { ReactComponent as DefaultCover } from "../assets/icons/default_cover.svg";

import "../styles/track-card.css";

const TrackCard = ({ track, onChoose }) => {
  return (
    <div className="track-card" onClick={onChoose}>
      <div className="cover-div">
        {track.cover ? (
          <img
            src={track.cover}
            alt={`Song cover: ${track.title} by ${track.artist}`}
          />
        ) : (
          <DefaultCover />
        )}
      </div>

      <div className="info-div">
        <h3>{track?.title}</h3>
        <p>{track?.artist}</p>
      </div>

      <div className="duration-div">
        <p>{track.duration}</p>
      </div>
    </div>
  );
};

export default TrackCard;
