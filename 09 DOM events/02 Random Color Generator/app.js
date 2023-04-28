const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

btn.addEventListener('click', function () {

    const newColor = randomColor();
    document.body.style.backgroundColor = newColor; 
    h1.innerText = newColor; 
})

const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}