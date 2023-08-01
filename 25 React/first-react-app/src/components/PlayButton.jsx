function PlayButton({ children, onSmash, onPause }) {
    let playing = false; //Not a good approach, don't use this

  function handleClick(evt) {
    console.log(evt);
    evt.stopPropagation();

    evt.preventDefault(); //stops default behaviour of an HTML element after an event is fired.

    playing ? onPause() : onSmash();
    playing = !playing;
  }

  return (
    // <button onClick={() => console.log("button clicked")}>Play</button>
    <button onClick={handleClick}>{children} {playing ? "||" : ">"}</button>
  );
}

export default PlayButton;
