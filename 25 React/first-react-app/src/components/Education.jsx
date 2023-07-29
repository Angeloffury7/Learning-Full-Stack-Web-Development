import "./styles/Education.css"

function Education({ edu }) {
  console.log(edu.college);
  console.log(edu.degree);
  console.log(edu.duration);

  return (
    <div className="Education">
      <h2 style={{ textDecoration: "underline" }}>Education</h2>
      <div className="ed">
        <div>
          <h3>{edu.college}</h3>
          <p style={{ color: "grey" }}>
            <i>{edu.degree}</i>
          </p>
        </div>
        <div>
          <p>
            <i>{edu.duration}</i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
