//FUNCTION OVERLOADING DOES NOT EXIST IN JAVASCRIPT!!!
function sing() {
  console.log("DO");
  console.log("RE");
  console.log("MI");
}

// sing();

//PASSING

function greet(person) {
  console.log(`Hi ${person}!`);
}

// greet("Gurditt");

function greet(firstName, lastName) {
  console.log(`Hi ${firstName} ${lastName[0]}!`);
}

// greet("George", "Clooney");

function repeat(str, num) {
  let result = "";
  for (let i = 0; i < num; i++) result += str;
  console.log(result);
}

//***************************************************//

function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") return "can't add";

  return x + y;
  console.log("lol");
}
