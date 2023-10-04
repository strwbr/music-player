import { useState } from "react";
import "./App.css";
import Player from "./components/Player";
import Playlist from "./components/Playlist";
import { tracks } from "./data/tracks";

function App() {
  return (
    <div className="App">
      {/* <Playlist /> */}
      <Player currentTrack={tracks[0]} tracks={tracks} />
    </div>
  );
}

export default App;
