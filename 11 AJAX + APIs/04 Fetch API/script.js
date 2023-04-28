fetch("https://swapi.dev/api/people/4/")
.then(res => {
    console.log("RESOLVED!", res);
    return res.json();
})
.then(data => {
    console.log(data); // This has our required JSON data
})
.catch(err => {
    console.log("Error!", err);
});





// fetch('https://swapi.dev/api/people/1/')
// .then(res => {
//     console.log('RESOLVED!', res);
//     return res.json();
// })
// .then(data => {
//     console.log(data); // This has our required JSON data
//     return fetch('https://swapi.dev/api/people/4/'); //returns a promise as well
// })
// .then(res2 => {
//     console.log('Resolved again!', res2);
//     return res2.json();
// })
// .then(data2 => {
//     console.log(data2);
// })
// .catch(err => {
//     console.log('Error!', err);
// });


// const loadStarWarsPeople = async () => {
//     try {
//     const res = await fetch('https://swapi.dev/api/peoplrterge/1/');
//     const data = await res.json();
//     console.log(data);

//     const res2 = await fetch('https://swapi.dev/api/people/4/');
//     const data2 = await res2.json();
//     console.log(data2);
//     } catch (err) {
//         console.log('Error!', err);
//     }
// };

// loadStarWarsPeople();