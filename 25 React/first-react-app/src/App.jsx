import videoDB from "./data/data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

import { useState } from "react";

import "./App.css";

function App() {
    const [videos, setVideos] = useState(videoDB);

    function addVideo(video) {
        setVideos([...videos, { ...video, id: videos.length + 1 }]); //generating id of new video
    }

    console.log("Rendering App");

    return (
        <div className="App" onClick={() => console.log("App clicked")}>
            <h2>Videos</h2>

            <AddVideo addVideo={addVideo} />
            <VideoList videos={videos} />
            {/* <Counter /> */}
        </div>
    );
}

export default App;
