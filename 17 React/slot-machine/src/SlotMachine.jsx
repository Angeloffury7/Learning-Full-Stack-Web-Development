import "./SlotMachine.css";

import Message from "./Message";

function SlotMachine({ icon1, icon2, icon3 }) {
  const iconStyle = { fontSize: "30px" };
  const hasWon = icon1 === icon2 && icon2 === icon3;

  return (
    <div className="SlotMachine">
      <h1>Slot Machine!</h1>

      <div className="icons">
        <span style={iconStyle}>{icon1}</span>
        <span style={iconStyle}>{icon2}</span>
        <span style={iconStyle}>{icon3}</span>
      </div>

    <Message hasWon={hasWon}/>
    </div>
  );
}

export default SlotMachine;
