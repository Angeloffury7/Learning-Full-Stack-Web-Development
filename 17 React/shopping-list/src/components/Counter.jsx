// function Counter() {
// //   let num = 0;
// //   const increment = () => {
// //     num++;
// //     console.log(num);
// //   };
//   return (
//     <div>
//       <p>The count is: {num}</p>
//       <button onClick={increment}>Click to increase</button>
//     </div>

//     /*Why is this not working?? Num is updating but we are not seeing the updated value?

//         A component is just a function. React has to know when to render the function again to see the updated value.
//         We have to tell it to re-render the component when "num" changes.
//         This is achieved using STATE.
//     */
//   );
// }

// export default Counter;

import { useState } from "react";

function Counter() {
  const [num, incrementNum] = useState(0);

    const changeNum = () => {
        incrementNum(num + 1);
    }

  return (
    <div>
      <p>The count is: {num}</p>
      <button onClick={changeNum}>Increment</button>
    </div>
  );
}

//We have a piece of state -> num
// We have a function to change that value -> incrementNum
//When incrementNum is called with a new value, the component is re-rendered with the new value.

export default Counter;
