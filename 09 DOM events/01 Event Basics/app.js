const btn = document.querySelector('#v2');

btn.onclick = function() {
    console.log("YOU CLICKED ME!!");
    console.log("I HOPE THIS WORKS");
}

function scream() {
    console.log('AAAAAHHHHHHH');
    console.log('STOP TOUCHING ME');
}

btn.onmouseenter = scream; 

const h1 = document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!');
}

                    //EVENT LISTENER

const btn3 = document.querySelector('#v3');

btn3.addEventListener('click', scream);

function twist() {
    console.log("TWIST");
}

function shout() {
    console.log("SHOUT");
}

const tasButton = document.querySelector('#tas');
// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener('click', twist, {once: true});
tasButton.addEventListener('click', shout );