import Video from "./components/Video";
// import Thumbnail from "./components/Thumbnail";
// import Resume from "./assignments/Resume";
import PlayButton from "./components/PlayButton";
import videos from "./data/data";

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

  return (
    <div>
      <h2>Videos</h2>
      {videos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
        />
      ))}

      <div style={{ clear: "both" }}>
        {/* <PlayButton message="play-button" onClick={() => console.log("clicked")}>Play</PlayButton> */}
        {/* won't work as it will treat onClick as a custom property of your component */}
        <PlayButton
          message="play-button"
          onSmash={() => console.log("playing")}
          onPause={() => console.log("paused")}>
          Play
        </PlayButton>

        {/* <PlayButton
          message="pause-button"
          onSmash={() => alert("clicked")}>
          Pause
        </PlayButton> */}
      </div>
    </div>

    // <div className="App">
    //   <Resume {...resObj} />
    // </div>
  );
}

export default App;
