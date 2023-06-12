import "./Message.css";

function Message({ hasWon }) {
  return (
    // <h1>Hello!</h1>
    <div className="Message">
      <h2 className={hasWon ? "winner" : "loser"}>
        {hasWon ? "You Win!!!" : "You Lose :("}
      </h2>
      {hasWon && <h3>Congrats!</h3>}
    </div>
  );
}

export default Message;
