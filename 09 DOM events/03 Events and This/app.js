const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

const btns = document.querySelectorAll('button');
for(let button of btns) {
    //button.addEventListener('click', () => {
        // console.log('clicked');
        // button.style.backgroundColor = makeRandColor();
        // button.style.color = makeRandColor();
        // this.style.backgroundColor = makeRandColor();
        // this.style.color = makeRandColor();
    //})

    button.addEventListener('click', colorizer)
}

function colorizer() {                              //GENERIC FUNCTION
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}   