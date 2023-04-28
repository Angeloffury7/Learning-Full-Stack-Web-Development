// function collectEggs() {
//     let totalEggs = 6;
//     console.log(totalEggs);
// }

// collectEggs();
// console.log(totalEggs); //error

//LEXICAL SCOPE
function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman']

    function cryForHelp() {
        for(let hero of heroes) {
            console.log(`PLEASE HELP us, ${hero.toUpperCase()}`);
        }
    }
    cryForHelp();
}

//******************************************
//Function Expressions
const add = function(x, y) {
    return x + y;
}

//*****************************************
