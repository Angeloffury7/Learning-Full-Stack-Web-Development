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

    //This is called an updater function

    setNumber(number => number + 1);
    //here, you are returning number + 1 i.e. 0 + 1 = 1
    setNumber(number => number + 1);
    //here, you are returning 1 + 1 = 2
    setNumber(number => number + 1);
    //here you are passing 2 + 1 = 3 to setNumber which will overrwrite previous 2 setNumber calls
    //and finally set number to 3 in state

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
