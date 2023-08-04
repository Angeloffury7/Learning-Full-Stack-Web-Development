import Name from "./Name.";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Achievements from "./Achievements";

import "./styles/Resume.css";

// const resObj = {
    //     name: "ABC applicant",
    //     experience: {
    //         year: "2019 - 2023",
    //         company: "Microsoft",
    //         role: "Staff Engineer 2",
    //     },
    //     education: { college: "BVCOE", degree: "BTech", duration: "2015-2019" },
    //     skills: ["react.js", "node.js", "express.js", "dsa", "mongodb"],
    //     achievements: ["university gold medalist", "won abc hackathon"],
    // };

function Resume({ name, experience, education, skills, achievements }) {
  console.log(experience);
  return (
    <div className="Resume">
      <Name name={name} />
      <Experience exp={experience} />
      <Education edu={education} />
      <Skills skills={skills} />
      <Achievements achieve={achievements} />
    </div>
  );
}

export default Resume;
