import React, { useRef, useState } from "react";
import ProgressBar from "./ProgressBar";
import Controls from "./Controls";
import TrackInfo from "./TrackInfo";
import ReactAudioPlayer from "react-audio-player";

const Player = ({ tracks }) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const [isRandom, setIsPandom] = useState(false);

  // ссылка на элемент аудио
  const audioPlayerRef = useRef();

  const nextSong = () => {
    // let newIndex = isRandom ? 0 : (trackIndex + 1) % tracks.length;
    // setTrackIndex(newIndex);
    // setCurrentTrack(tracks[newIndex]);
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
    console.log("nextSong()");
  };

  return (
    <div className="audio-player">
      <TrackInfo track={currentTrack} />
      <ReactAudioPlayer
        src={currentTrack.src}
        ref={audioPlayerRef}
        onPlay={() => console.log("onPlay event")}
        onPause={() => console.log("onPause event")}
        onEnded={nextSong}
      />

      <ProgressBar />
      <Controls
        audioPlayerRef={audioPlayerRef}
        setIsRandom={setIsPandom}
        nextSong={nextSong}
      />
    </div>
  );
};

export default Player;
