import React from "react";
import TrackCard from "./TrackCard";
// import { tracks } from "../data/tracks";
import "../styles/playlist.css";

const Playlist = ({ tracks, trackIndex, setTrackIndex }) => {
  const handleChooseTrack = (index) => {
    // console.log(`handleChooseTrack() - index = ${index}`);
    setTrackIndex(index);
  };

  return (
    <div className="playlist">
      {tracks.map((track, index) => (
        <TrackCard
          key={track.id}
          track={track}
          onChoose={() => handleChooseTrack(index)}
          isActive={index === trackIndex}
        />
      ))}
    </div>
  );
};

export default Playlist;
