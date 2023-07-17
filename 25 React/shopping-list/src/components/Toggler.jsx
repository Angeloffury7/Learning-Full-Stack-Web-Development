import { useState } from "react";

function Toggler() {
  const [isHappy, moodChange] = useState(true);

    const toggleMood = () => moodChange(!isHappy);

  return (
    <>
      <p onClick={toggleMood} style={{ fontSize: "32px", cursor: "pointer"}}>
        {isHappy ? "🙂" : "😭"}
      </p>
    </>
  );
}

export default Toggler;
