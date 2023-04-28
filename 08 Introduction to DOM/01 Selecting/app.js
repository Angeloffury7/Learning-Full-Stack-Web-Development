const allImages = document.getElementsByTagName('img')

// for(let img of allImages) {
//     img.src = 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
// }

// const sqImages = document.getElementsByClassName('square')
// for(let img of sqImages) {
//     console.log(img.src)
// }

document.querySelector('#banner');
document.querySelector('p');
document.querySelector('img:nth-of-type(2)');

//selecting by attribute
document.querySelector('a[title="Java"]');

//descendant selector
document.querySelectorAll('p a');

const links = document.querySelectorAll('a');

// for(let link of links) console.log(link.href);
