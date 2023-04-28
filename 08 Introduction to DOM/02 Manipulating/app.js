// document.querySelector('p').innerText = 'lmfaoooo';
// const allLinks = document.querySelectorAll('a')

// for(let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!';
// }

// document.querySelector('h1').innerText = '<i>LMAOO</i>'; //It will treat it as literal text.

// document.querySelector('h1').innerHTML = '<i>LMAOO</i>'; //It will recognize the <i> tags and will treat them as HTML.
// document.querySelector('h1').innerHTML += '<sup>lol is this working</sup>'

// document.querySelector('#banner').id = 'whoops';
//document.querySelector('a').href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
//document.querySelector('#banner').src = 'data:image/png;base64,iVBORw0KGgoAAAAN


/*

const input = document.querySelector('input[type="text"]');
input.type = 'password'
input.type = 'color'

*/


                        //CHANGING STYLES

// const h1 = document.querySelector('h1');
// h1.style;

const allLinks = document.getElementsByTagName('a');

for(let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}


//APPLYING CLASSES

// h2.setAttribute('class', 'border')
// h2.classList.add('border')
// h2.classList.remove('border')
// h2.classList.toggle('border')
