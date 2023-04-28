const tasks = [];

let query = prompt("What would you like to do?");

while(query !== "quit" && query !== 'q') {
    if(query === "new") {
        const task = prompt("Enter a new task");
        tasks.push(task);
        console.log(`${task} added to the list!`);

    } else if(query === "list"){
        console.log("**********");
        for(let x = 0; x<tasks.length; x++) console.log(`${x}: ${tasks[x]}`);
        console.log("**********");

    } else if(query === "delete"){
        const del = parseInt(prompt("Enter the task you want to delete"));
        if(!Number.isNaN(del)) {
            console.log(`Deleted "${tasks[del]}"!`);
            tasks.splice(del, 1);
        }

    } else {
        alert("I didn't understand that, please enter a valid query");
    }
    query = prompt("What would you like to do?");
}

console.log("Ok, quitting the app!");

// alert("is this working? press ok if yes");