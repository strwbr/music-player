// songs imports
import cartoonToy from "./songs/mixkit-cartoon-toy-whistle-616.wav";
import likeCrazy from "./songs/like_crazy.mp3";
import dday from "./songs/d_day.mp3";
import takeTwo from "./songs/take_two.mp3";
import more from "./songs/more.mp3";
import runBts from "./songs/run_BTS.mp3";

// covers imports
import likeCrazyCover from "./songs_covers/face_cover.jpg";
import ddayCover from "./songs_covers/d-day_cover.jpg";
import takeTwoCover from "./songs_covers/takeTwo_cover.jpg";
import moreCover from "./songs_covers/more_cover.png";

export const tracks = [
  // {
  //   id: 1,
  //   title: "Cartoon Toy",
  //   artist: "from free resourse",
  //   src: cartoonToy,
  //   cover: undefined,
  // },
  {
    id: 1,
    title: "MORE",
    artist: "j-hope",
    src: more,
    cover: moreCover,
  },
  {
    id: 2,
    title: "Like Crazy",
    artist: "Jimin",
    src: likeCrazy,
    cover: likeCrazyCover,
  },
  {
    id: 3,
    title: "D-Day",
    artist: "Agust-D",
    src: dday,
    cover: ddayCover,
  },
  {
    id: 4,
    title: "Take Two",
    artist: "BTS",
    src: takeTwo,
    cover: takeTwoCover,
  },
  {
    id: 5,
    title: "Run BTS",
    artist: "BTS",
    src: runBts,
    cover: undefined,
  },
];
