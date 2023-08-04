import { useState } from "react";
import "./styles/AddVideo.css";

function AddVideo({ addVideo }) {
    const [video, setVideo] = useState({
        time: "3 hours ago",
        channel: "gurdittcancode",
        verified: false,
    });

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(video); //Getting the video object yayy
        addVideo(video);
    }

    function handleChange(evt) {
        //to pick up values
        evt.stopPropagation();
        // console.log(evt.target.value, evt.target.name);

        setVideo({ ...video, [evt.target.name]: evt.target.value });
        // Adding square brackets as key must be a string, brackets tell JS that this expressions
        //needs to be evaluated

        // console.log(video);
    }

    return (
        <form>
            <input
                type="text"
                name="title"
                onChange={handleChange}
                placeholder="title"
            />
            <input
                type="text"
                name="views"
                onChange={handleChange}
                placeholder="views"
            />

            {video.title}

            <button onClick={handleSubmit}>Add Video</button>
        </form>
    );
}

export default AddVideo;
