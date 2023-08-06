import { useState } from "react";
import "./styles/AddVideo.css";

const initialVideoState = {
    time: "3 hours ago",
    channel: "gurdittcancode",
    verified: false,
    title: "",
    views: "",
};

function AddVideo({ addVideo }) {
    const [video, setVideo] = useState(initialVideoState);

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(video);
        addVideo(video);

        setVideo(initialVideoState); //setting the video state back to initial state
    }

    function handleChange(evt) {
        evt.stopPropagation();
        // console.log(evt.target.value, evt.target.name);

        setVideo({ ...video, [evt.target.name]: evt.target.value });
        // An object's key can't be a variable, so we are adding square brackets to tell JS to evaulate it first.

        // console.log(video);
    }

    return (
        <form>
            <input
                type="text"
                name="title"
                onChange={handleChange}
                placeholder="title"
                value={video.title}
            />
            <input
                type="text"
                name="views"
                onChange={handleChange}
                placeholder="views"
                value={video.views}
            />

            <button onClick={handleSubmit}>Add Video</button>
        </form>
    );
}

export default AddVideo;
