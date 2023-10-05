import React, { useRef, useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import Controls from "./Controls";
import TrackInfo from "./TrackInfo";
import ReactAudioPlayer from "react-audio-player";

const Player = ({ tracks }) => {
  const [trackIndex, setTrackIndex] = useState(0);
  // const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const [isRandom, setIsPandom] = useState(false);

  // ссылка на элемент аудио
  const audioPlayerRef = useRef();

  const handleNextSong = () => {
    let newIndex = isRandom ? 0 : (trackIndex + 1) % tracks.length;
    setTrackIndex(newIndex);
    // setCurrentTrack(tracks[newIndex]);
    console.log("nextSong()");
    // console.log("src: " + audioPlayerRef.current.audioEL.current.src);
  };

  return (
    <div className="audio-player">
      <TrackInfo track={tracks[trackIndex]} />
      <ReactAudioPlayer
        src={tracks[trackIndex].src}
        ref={audioPlayerRef}
        onPlay={() => console.log("onPlay event")}
        onPause={() => console.log("onPause event")}
        onEnded={handleNextSong}
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
        // currentTrack={currentTrack}
      />
    </div>
  );
};

export default Player;
