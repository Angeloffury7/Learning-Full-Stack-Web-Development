function Skills({ skills }) {
  return (
    <div className="Skills">
        <h2 style={{textDecoration: "underline"}}>Skills</h2>
      <ul>
        {skills.map((skill) => <li>{skill}</li>)}
      </ul>
    </div>
  );
}

export default Skills;
