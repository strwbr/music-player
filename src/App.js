import { useState } from "react";
import "./App.css";
import Player from "./components/Player";
import Playlist from "./components/Playlist";
import { tracks } from "./data/tracks";

function App() {
  const [trackIndex, setTrackIndex] = useState(0);
  return (
    <div className="App">
      <Playlist setTrackIndex={setTrackIndex} />
      <Player
        tracks={tracks}
        trackIndex={trackIndex}
        setTrackIndex={setTrackIndex}
      />
    </div>
  );
}

export default App;
