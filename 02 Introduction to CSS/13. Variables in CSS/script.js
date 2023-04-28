//getting the variable

//document.documentElement returns the Element that is the root element of the document

console.log(window.getComputedStyle(document.documentElement).getPropertyValue('--div-background-color'));

const darkBtn = document.querySelector('#dark-theme-btn');
darkBtn.addEventListener('click', () => {
    document.documentElement.style.setProperty('--background-color', '#333');
    document.documentElement.style.setProperty('--div-background-color', '#3ae');
});

const lightBtn = document.querySelector('#light-theme-btn');
lightBtn.addEventListener('click', () => {
    document.documentElement.style.setProperty('--background-color', '#fff');
    document.documentElement.style.setProperty('--div-background-color', '#2fd');

});