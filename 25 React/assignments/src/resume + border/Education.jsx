import "./styles/Education.css"

function Education({education}) {
    const {degree, school, graduationYear} = education;

    return (
        <div className="Education">
            <h2>Education</h2>
            <div className="content">
                <div>
                    <h3>{school}</h3>
                    <p>{degree}</p>
                </div>
                <div>
                    <p><i>{graduationYear}</i></p>
                </div>
            </div>
        </div>
    );
}

export default Education;