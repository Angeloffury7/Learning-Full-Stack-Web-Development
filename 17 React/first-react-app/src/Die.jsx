export default function Die({ numSides }) {
    console.log(numSides);
    const roll = Math.floor(Math.random() * numSides) + 1;
    return (
      <div>
        <h1>Number of sides of Die: {numSides}</h1>
        <h2>Die roll: {roll}</h2>
      </div>
    );
}