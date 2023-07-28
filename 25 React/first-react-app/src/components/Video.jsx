import "./Video.css";

function Video() {
  let topic = "React.js";
  let bg = "dark";
  return (
    <>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbiUm_6lWYxsgn8ixnLEePQdUH8WDdmliVVNK95k4Z1QrilbP_9dlCNO_Gu4N6QhcnuTg&s"
        alt="Katherine Johnson"
      />
      <div className={bg} style={{ color: "red" }}>
        Gurditt is learning {topic}
      </div>
    </>
  );
}

export default Video;
