import React from "react";
import { ReactComponent as DefaultCover } from "../assets/icons/default_cover.svg";

import "../styles/track-info.css";

const TrackInfo = ({ track }) => {
  return (
    <div className="audio-info">
      <div className="audio-cover">
        {track.cover ? (
          <img
            src={track.cover}
            alt={`Song cover: ${track.title} by ${track.artist}`}
          />
        ) : (
          <div>
            <span>
              <DefaultCover />
            </span>
          </div>
        )}
      </div>
      <div className="audio-title">
        <p>{track?.title}</p>
        <p>{track?.artist}</p>
      </div>
    </div>
  );
};

export default TrackInfo;
