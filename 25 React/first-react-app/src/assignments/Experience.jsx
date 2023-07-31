import "./styles/Experience.css"

function Experience({ exp }) {
  console.log(exp.company);
  console.log(exp.year)
  console.log(exp.role);

  return (
    <div className="Experience">
      <h2 style={{ textDecoration: "underline" }}>Experience</h2>
      <div className="exp">
        <div>
          <h3>{exp.company}</h3>
          <p style={{ color: "grey" }}>
            <i>{exp.role}</i>
          </p>
        </div>
        <div>
          <p>
            <i>{exp.year}</i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
