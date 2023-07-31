function PlayButton({ message, children, onSmash, onPause }) {
    let playing = false;
  function handleClick() {
    playing ? onPause() : onSmash();
    playing = !playing;
  }

  return (
    // <button onClick={() => console.log("button clicked")}>Play</button>
    <button onClick={handleClick}>{children}</button>
  );
}

export default PlayButton;
