import ContactInfo from "./ContactInfo";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import resumeData from "./data";
import Print from "./Print";

import "./styles/Resume.css"

function Resume() {
    console.log(resumeData);

    return (
        <div className="Resume">
            <h1>{resumeData.name}</h1>
            <ContactInfo contact={resumeData.contactInfo} />

            <h2>Summary</h2>
            <p>{resumeData.summary}</p>

            <Education education={resumeData.education} />
            <Experience experience={resumeData.experience} />
            <Skills skills={resumeData.skills} />
        </div>
    );
}

export default Resume;