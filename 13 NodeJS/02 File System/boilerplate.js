const fs = require('fs');
// console.log(fs);

// fs.mkdir('Dogs', {recursive: true}, (err) => { //THIS IS THE ASYNCHRONOUS VERSION
// 	console.log('IN THE CALLBACK!');
// 	if(err) throw err;
// });
// console.log('I come after mkdir!!'); //THIS WILL RUN FIRST

const arg = process.argv[2] || 'New Folder'; //if no arguments have been passed to the script

try {
	fs.mkdirSync(arg); //Synchronous

	fs.writeFileSync(`${arg}/index.html`, "");
	fs.writeFileSync(`${arg}/styles.css`, "");
	fs.writeFileSync(`${arg}/script.js`, "");
}	catch (err) {
	console.log("ERRORRRR!!!!");
	console.log(err);
}