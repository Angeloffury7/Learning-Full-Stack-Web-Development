const container = document.querySelector('#container');
const button = document.querySelector('button');

button.addEventListener('click', (evt) => {
    container.style.backgroundColor = makeRandColor();
    evt.stopPropagation();
});

container.addEventListener('click', () => {
    container.classList.toggle('hide');
})

function makeRandColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}
