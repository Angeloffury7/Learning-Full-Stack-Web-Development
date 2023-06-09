// export default function Game() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
//     const result = num1 === num2 ? "Win :)" : "Lose :(";
//     return (
//         <div>
//             <h1>You {result}</h1>
//             <p>Num1: {num1}</p>
//             <p>Num2: {num2}</p>
//         </div>
//     )
// }

//New version

// export default function Game() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
//     return (
//         <div>
//             <h1>You {num1 === num2 ? "Win :)" : "Lose :("}</h1>
//             <p>Num1: {num1}</p>
//             <p>Num2: {num2}</p>
//         </div>
//     )
// }

//Best
export default function Game() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    return (
      <div>
        <h2>Double Dice</h2>
        {/* {num1 === num2 ? <h3>You win!! :D</h3> : null}  */}
        {/* if it evaluates to false, don't render anyting */}

        {/* slight improvement, since we don't need an else clause*/}
        {num1 === num2 && <h3>You win!!</h3>}
        <p>Num1: {num1}</p>
        <p>Num2: {num2}</p>
      </div>
    );
}