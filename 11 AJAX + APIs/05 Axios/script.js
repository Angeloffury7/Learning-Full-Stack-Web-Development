// axios.get("https://swapi.dev/api/people/4/").then(res => {
//     console.log(res);
// })
// .catch(e => {
//     console.log(e);
// });


const getStarWarsPerson = async (id) => {
    try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);
    } catch (e) {
        console.log(e);
    }
}

// getStarWarsPerson(1);
// getStarWarsPerson(4);

const jokes = document.querySelector("#jokes");
const btn = document.querySelector("button");

const addNewJoke = async () => {
    const joke = await getDadJoke();
    const newLi = document.createElement("LI");
    newLi.append(joke);
    jokes.append(newLi);
}

const getDadJoke = async () => {
    try {
        const config = {headers: {Accept: "application/json"}}
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        //getting the JSON string and subsequent JS object

        // console.log(res);
        // console.log(res.data.joke);

        return res.data.joke; //returning the joke text
    }  catch (e) {
        return "NO JOKES AVAILBALE, SORRY!"
    }
}

btn.addEventListener("click", addNewJoke);