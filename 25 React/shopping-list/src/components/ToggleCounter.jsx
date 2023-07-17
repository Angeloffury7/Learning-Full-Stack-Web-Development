import { useState } from "react";

function ToggleCounter() {
  const [isHappy, moodChange] = useState(true);
//   These useState() functions are completely independent from each other.
  const [count, setCount] = useState(0);

  const toggleMood = () => {
    moodChange(!isHappy);
  };

  const updateCount = () => setCount(count + 1);

  return (
    <>
      <p onClick={toggleMood} style={{ fontSize: "32px", cursor: "pointer" }}>
        {isHappy ? "🙂" : "😭"}
      </p>
      <p>{count}</p>
      <button onClick={updateCount}>+</button>
    </>
  );
}

export default ToggleCounter;
