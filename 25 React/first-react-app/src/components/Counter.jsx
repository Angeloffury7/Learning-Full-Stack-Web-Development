import { useState } from "react";

function Counter() {
    console.log("Render counter")
  const [number, setNumber] = useState(0);

  function handleClick(evt) {
    evt.stopPropagation();
    // setTimeout(() => {
    //     setNumber(number => number + 1);
    // }, 2000)
    // No matter how many times we click it, it only increments by one??

    setNumber(number => number + 1);
    setNumber(number => number + 1);
    setNumber(number => number + 1);

    console.log(number);
  }

  return (
    <>
      <h1 style={{ marginTop: "400px" }}>{number}</h1>
      <button onClick={handleClick}>+1</button>
    </>
  );
}

export default Counter;
