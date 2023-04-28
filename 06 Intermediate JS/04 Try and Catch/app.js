// try {
//     hello.toUpperCase();
// } catch {
//     alert("ERROR!!");
// }

// console.log("AFTER");

function yell(msg) {
    try {
    console.log(msg.toUpperCase().repeat(3));
    } catch(e) {
        // console.log(e);                         //USE THIS SYNTAX TO PRINT THE ERROR
        console.log("Please pass a string next time!");
    }
}