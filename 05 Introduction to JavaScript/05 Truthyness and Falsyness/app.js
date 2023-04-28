const userInp = prompt("enter something");

if(userInp) {
    console.log("truthy!");
} else {
    console.log("falsy!");
}

if("") {
    console.log("truthy");
} else {
    console.log("falsy");
}

// logical operators
const password = prompt("enter your password");

if(password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("good job!");
} else {
    console.log("incorrect format");
}
