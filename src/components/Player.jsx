import React, { useRef, useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import Controls from "./Controls";
import TrackInfo from "./TrackInfo";
import ReactAudioPlayer from "react-audio-player";

const Player = ({ tracks }) => {
  const [trackIndex, setTrackIndex] = useState(0);
  // const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const [isRandom, setIsPandom] = useState(false);
  const [isLoop, setLoop] = useState(false);

  // ссылка на элемент аудио
  const audioPlayerRef = useRef();

  const handleNextSong = () => {
    let newIndex = (trackIndex + 1) % tracks.length;
    if (isRandom) {
      do {
        newIndex = Math.floor(Math.random() * tracks.length);
      } while (trackIndex === newIndex);
    }
    // let newIndex = isRandom
    //   ? Math.floor(Math.random() * tracks.length)
    //   : (trackIndex + 1) % tracks.length;
    setTrackIndex(newIndex);
    // setCurrentTrack(tracks[newIndex]);
    console.log("handleNextSong()");
  };

  return (
    <div className="audio-player">
      <TrackInfo track={tracks[trackIndex]} />
      <ReactAudioPlayer
        controls
        src={tracks[trackIndex].src}
        ref={audioPlayerRef}
        onPlay={() => console.log("onPlay event")}
        onPause={() => console.log("onPause event")}
        onEnded={handleNextSong}
        loop={isLoop}
      />
      {/* <button onClick={() => console.log(getSrc())}>Get src</button> */}
      <ProgressBar />
      <Controls
        audioPlayerRef={audioPlayerRef}
        isRandom={isRandom}
        setIsRandom={setIsPandom}
        handleNextSong={handleNextSong}
        trackIndex={trackIndex}
        setTrackIndex={setTrackIndex}
        tracks={tracks}
        isLoop={isLoop}
        setLoop={setLoop}
        // currentTrack={currentTrack}
      />
    </div>
  );
};

export default Player;
