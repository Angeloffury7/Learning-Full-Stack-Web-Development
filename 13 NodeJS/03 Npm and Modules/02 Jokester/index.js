const jokes = require('give-me-a-joke');
const colors = require('colors');
const cow = require('cowsay');
//console.dir(jokes);
jokes.getRandomDadJoke(joke => {
	console.log(joke.rainbow);
});

