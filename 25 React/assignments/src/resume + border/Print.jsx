function Print() {

    function handleClick() {
        window.print();
    }

    return (
        <button onClick={handleClick}>print this bitch</button>
    );
}

export default Print;