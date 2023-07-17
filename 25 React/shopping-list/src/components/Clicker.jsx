// function handleClick() {
//     console.log("CLICKED THE BUTTON!")
// }

// function handleHover() {
//     console.log("Hovered!!!")
// }

// function Clicker() {
//     return (
//         <div>
//             <h1 onMouseOver={handleHover}>Hover over Me!!</h1>
//             <button onClick={handleClick}>Click Me!!!</button>
//         </div>
//     );
// }

function Clicker({ msg, btnText }) {
  const handleClick = () => alert(msg);
//   return <button onClick={() => alert(msg)}>{btnText}</button>;
  return <button onClick={handleClick}>{btnText}</button>;
}

export default Clicker;
