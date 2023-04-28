const input = document.querySelector('input');
const h1 = document.querySelector('h1');
input.addEventListener('input', (evt) => {
    h1.innerText = input.value;
    console.log(evt.data);
});