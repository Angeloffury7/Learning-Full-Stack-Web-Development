document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt);
});

// const input = document.querySelector('input');
// input.addEventListener('keydown', function (e) {  //event object
//     // console.log('KEY PRESSED');
//     console.log(e.key);
//     console.log(e.code);

// })

/*
    KeyboardEvent {isTrusted: true, key: 'd', code: 'KeyD', location: 0, ctrlKey: false, …}
*/

// input.addEventListener('keyup', function () {
//     console.log('KEY RELEASED!');
// })


                        //  GLOBAL KEYBOARD EVENT

window.addEventListener('keydown', function (evt) {
    switch(evt.code) {
        case 'ArrowUp': 
            console.log('UP!');
            break;

        case 'ArrowDown':
            console.log('DOWN!');
            break;

        case 'ArrowLeft':
            console.log('LEFT!');
            break;

        case 'ArrowRight':
            console.log('RIGHT!');
            break;
        
        default: 
            console.log('IGNORED!');
    }
})