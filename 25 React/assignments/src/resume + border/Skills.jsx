function Skills({ skills }) {
    console.log(skills);
    return (
        <div style={{ marginTop: "3rem" }}>
            <h2>Skills</h2>
            <ul>
                {skills.map((skill) => (
                    <li key="0">{skill}</li>
                ))}
            </ul>
        </div>
    );
}

export default Skills;
