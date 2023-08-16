function List({ people, clearAll, restoreAll }) {
    console.log(people);
    return (
        <>
            <button onClick={() => clearAll()}>Clear All</button>
            <button onClick={() => restoreAll()}>Oops</button>
            <div>
                {people.map((person) => {
                    return (
                        <div>
                            <img
                                src={person.image}
                                style={{ height: "300px" }}
                            />
                            <h3>
                                {person.name},{" "}
                                {person.age
                                    ? `age: ${person.age}`
                                    : `born: ${person.birthYear}`}
                            </h3>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default List;
