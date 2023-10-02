import React from "react";
import TrackCard from "./TrackCard";
import { tracks } from "../data/tracks";

const Playlist = () => {
  return (
    <div>
      <TrackCard track={tracks[1]} />
      <TrackCard track={tracks[2]} />
      <TrackCard track={tracks[1]} />
      <TrackCard track={tracks[2]} />
    </div>
  );
};

export default Playlist;
