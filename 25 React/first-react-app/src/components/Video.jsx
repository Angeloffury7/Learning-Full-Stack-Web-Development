import "./styles/Video.css";

function Video({ title, channel="Channel Name", views, time, thumbnail, verified="false" }) {
  // console.log(props);
  // let bg = "dark";

  return (
    <>
      <div className="container">
        <div className="pic">
          <img src={thumbnail} alt="Thumbnail" />
        </div>
        <div className="title">Gurditt is learning {title}</div>
        {verified ? (
          <div className="channel">{channel}✔️</div>
        ) : (
          <div className="channel">{channel}</div>
        )}
        <div className="views">
          {views} views <span>·</span> {time}
        </div>
      </div>
    </>
  );
}

export default Video;
