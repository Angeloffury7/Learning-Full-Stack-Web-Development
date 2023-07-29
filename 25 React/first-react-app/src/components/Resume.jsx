import Name from "./Name.";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Achievements from "./Achievements";

import "./styles/Resume.css"

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
