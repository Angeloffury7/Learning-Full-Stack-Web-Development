import "./styles/Video.css";

function Video({
  id,
  title,
  channel = "Channel Name",
  views,
  time,
  verified = "false",
  children,
}) {
  // console.log(props);
  // let bg = "dark";

  return (
    <>
      <div className="container">
        <div className="pic">
          <img src={`https://picsum.photos/id/${id}/160/90`} alt="Thumbnail" />
        </div>
        <div className="title">Gurditt is learning {title}</div>
        {/* <div className="channel">
          {channel} {verified ? "✔️" : null}
        </div> */}

        <div className="channel">
          {channel} {verified && "✔️"}
          {/* But yahan issue hai ki if verified is a number, wo number render ho sakta hai */}
        </div>

        <div className="views">
          {views} views <span>·</span> {time}
        </div>

        <div>{children}</div>
      </div>
    </>
  );
}

export default Video;
