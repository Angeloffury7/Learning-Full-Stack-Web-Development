import Video from "./components/Video";
import Thumbnail from "./components/Thumbnail";
import "./App.css";
import Resume from "./components/Resume";

function App() {
  let obj = {
    title: "Express.js",
    views: "1.2M",
    time: "3 months ago",
    thumbnail:
      "https://twinsynergy.co.th/wp-content/uploads/2021/06/nodejs-express.png",
    channel: "gurdittcancode",
    verified: true,
  };

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
      <Video
        title="MongoDB"
        views="100k"
        time="3 hours ago"
        thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXZPIWevT2KaAZdQ8UqoEHMPAxBRdgwOn9nhk_0PJNLx3Yfwcf17MnE1vKlHa_nXLNWmE&usqp=CAU"
        channel="gurdittcancode"
        verified={false}
      />

      <Video {...obj} />

      <Video
        title="React.js"
        views="20k"
        time="1 year ago"
        thumbnail="https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"
        channel="gurdittcancode"
        verified={true}
      />
      {/* <Thumbnail /> */}
      {/* <Video title="Express.js" bgColor="green"/> */}
    </div>
    // <div className="App">
    //   <Resume {...resObj} />
    // </div>
  );
}

export default App;
