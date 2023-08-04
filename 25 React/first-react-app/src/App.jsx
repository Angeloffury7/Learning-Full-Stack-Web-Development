import Video from "./components/Video";
import PlayButton from "./components/PlayButton";
import videoDB from "./data/data";
import AddVideo from "./components/AddVideo";
import { useState } from "react";

import "./App.css";

function App() {
    const [videos, setVideos] = useState(videoDB);

    function addVideo(video) {
        setVideos([...videos, {...video, id: videos.length + 1}]); //generating id of new video
    }

    console.log("Rendering App");

    return (
        <div className="App" onClick={() => console.log("App clicked")}>
            <h2>Videos</h2>

            {/* <AddVideo addVideo={setVideos} /> */}
            <AddVideo addVideo={addVideo} />

            {videos.map((video) => (
                <Video
                    key={video.id}
                    id={video.id}
                    title={video.title}
                    views={video.views}
                    time={video.time}
                    channel={video.channel}
                    verified={video.verified}
                >
                    <PlayButton
                        onSmash={() => console.log("playing ", video.title)}
                        onPause={() => console.log("paused ", video.title)}
                    >
                        {video.title}
                    </PlayButton>
                    {/* Now we are nesting the playbutton inside the Video component as 
                  we want a play/pause button with each video. Access it using
                  children props. */}
                </Video>
            ))}

            {/* <Counter /> */}
        </div>
    );
}

export default App;
