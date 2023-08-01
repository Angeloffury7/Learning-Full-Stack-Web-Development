import Video from "./components/Video";
// import Thumbnail from "./components/Thumbnail";
// import Resume from "./assignments/Resume";
import PlayButton from "./components/PlayButton";
import videoDB from "./data/data";
import Counter from "./components/Counter";
import { useState } from "react";

import "./App.css";

function App() {
  const resObj = {
    name: "ABC applicant",
    experience: {
      year: "2019 - 2023",
      company: "Microsoft",
      role: "Staff Engineer 2",
    },
    education: { college: "BVCOE", degree: "BTech", duration: "2015-2019" },
    skills: ["react.js", "node.js", "express.js", "dsa", "mongodb"],
    achievements: ["university gold medalist", "won abc hackathon"],
  };

  const [videos, setVideos] = useState(videoDB);

  return (
    <div className="App" onClick={() => console.log("App clicked")}>
      <h2>Videos</h2>

      <button onClick={() => {
        setVideos([
          ...videos,
          {
            id: videos.length + 1,
            title: "MongoDB",
            views: "100k",
            time: "3 hours ago",
            channel: "gurdittcancode",
            verified: false,
          },
        ]);
      }}>Add Videos</button>

      {videos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}>

          <PlayButton
            onSmash={() => console.log("playing ",video.title)}
            onPause={() => console.log("paused ",video.title)}>
            {video.title}
          </PlayButton>
        </Video>
      ))}

      {/* <div style={{ clear: "both" }}> */}
        {/* <PlayButton message="play-button" onClick={() => console.log("clicked")}>Play</PlayButton> */}
        {/* won't work as it will treat onClick as a custom property of your component */}

        {/* <PlayButton
          message="pause-button"
          onSmash={() => alert("clicked")}>
          Pause
        </PlayButton> */}
      {/* </div> */}

        <Counter />

    </div>

    // <div className="App">
    //   <Resume {...resObj} />
    // </div>
  );
}

export default App;
