function Experience({ experience }) {
    // console.log(experience);

    return (
        <div className="Experience">
            <h2>Experience</h2>
            {experience.map((exp) => {
                const {
                    position,
                    company,
                    startDate,
                    endDate,
                    responsibilities,
                } = exp;

                return (
                    <div style={{ marginTop: "3rem" }}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-around",
                            }}
                        >
                            <div>
                                <h3>{company}</h3>
                                <p>{position}</p>
                            </div>

                            <div>
                                <i>
                                    {startDate} - {endDate}
                                </i>
                            </div>
                        </div>
                        <p>
                            <i>{responsibilities}</i>
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

export default Experience;
