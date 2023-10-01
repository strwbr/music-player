import "./App.css";
import Player from "./components/AudioPlayer";
import Playlist from "./components/Playlist";

function App() {
  return (
    <div className="App">
      <Playlist />
      <Player />
    </div>
  );
}

export default App;
