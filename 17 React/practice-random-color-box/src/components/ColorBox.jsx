import { useState } from "react";
import "./css/ColorBox.css";

function genRandColor(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  const newColor = arr[idx];
  return newColor;
}

function ColorBox({ colors }) {
  const [color, setColor] = useState(genRandColor(colors));

  const changeColor = () => {
    let randomColor = genRandColor(colors);
    setColor(randomColor);
  };

  return (
    <div
      className="ColorBox"
      onClick={changeColor}
      style={{ backgroundColor: color, cursor: "pointer" }}
    ></div>
  );
}

export default ColorBox;
