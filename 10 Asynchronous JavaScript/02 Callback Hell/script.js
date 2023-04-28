// document.body.style.backgroundColor = 'red';
// document.body.style.backgroundColor = 'orange';

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

const delayedColorChange = (color, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = color;
        doNext && doNext()
    }, delay)
}

delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000, () => {
                })
            })
        })
    })
})

searchMoviesAPI('Amadeus', () => {
    saveToMyDB(movies, () => {
        //if it works, run this:    
    }, () => {
        //if it doesn't, run this:
    })
}, () => {
    //if API is down/request failed

})

//THIS PATTERN IS QUITE COMMON (CALLBACK HELL)
