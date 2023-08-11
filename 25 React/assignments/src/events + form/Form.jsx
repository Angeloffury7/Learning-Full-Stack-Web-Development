function Form() {
    function handleKeyDown(evt) {
        if(evt.key === "Enter") {
            alert("Enter was pressed!")
        }
    }

    return (
        <form
            onSubmit={(evt) => {
                evt.preventDefault();
                console.log("Submitted form");
            }}
        >
            <textarea cols="30" rows="10"></textarea>
            <br />

            <input type="text" onKeyDown={handleKeyDown} />
            <br />

            <button>Click!</button>
        </form>
    );
}

export default Form;
