const btn1 = document.querySelector('#player1Button');
const btn2 = document.querySelector('#player2Button');
const player1Score = document.querySelector('#score-1');
const player2Score = document.querySelector('#score-2');

let maxScore = 3;

let player1 = 0;
let player2 = 0;
let isGameOver = false;

btn1.addEventListener('click', () => {
    if(!isGameOver) {
        player1++;
        player1Score.textContent = player1;
        if(player1 === maxScore) {
            player1Score.classList.add('has-text-success');
            player2Score.classList.add('has-text-danger');
            isGameOver = true;
            btn1.disabled = true; //If the game is over, disable the buttons
            btn2.disabled = true;
        }
    }
});

btn2.addEventListener('click', () => {
    if(!isGameOver) {
        player2++;
        player2Score.textContent = player2;
        if(player2 === maxScore) {
            player1Score.classList.add('has-text-danger');
            player2Score.classList.add('has-text-success');
            isGameOver = true;
            btn1.disabled = true; //If the game is over, disable the buttons
            btn2.disabled = true;
        }
    }
});

const reset = document.querySelector('#reset');
reset.addEventListener('click', resetGame);

const maxScoreSelect = document.querySelector('#playto');
maxScoreSelect.addEventListener('change', function () {
    // alert(this.value);
    maxScore = parseInt(this.value);
    resetGame();
})

function resetGame() {
    player1Score.classList.remove('has-text-success', 'has-text-danger');
    player2Score.classList.remove('has-text-success', 'has-text-danger');
    player1 = 0;
    player2 = 0;
    isGameOver = false;
    player1Score.textContent = '0';
    player2Score.textContent = '0';
    btn1.disabled = false;
    btn2.disabled = false;   
}