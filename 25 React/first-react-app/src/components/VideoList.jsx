import Video from "./Video";
import PlayButton from "./PlayButton";

function VideoList({ videos }) {
    return (
        <>
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
        </>
    );
}

export default VideoList;
