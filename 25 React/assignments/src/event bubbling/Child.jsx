function Child({ path, updatePath }) {

    function handleClick() {
        path.push("child");
        updatePath(path);
    }

    return (
        <div>
            Child
            <br />
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Child;
