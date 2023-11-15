//Déclaration du DOM
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const score1 = document.getElementById('score-1');
const score2 = document.getElementById('score-2');
const currentScore1 = document.getElementById('currentScore-1');
const currentScore2 = document.getElementById('currentScore-2');
const btnNewGame = document.getElementById('newGame');
const btnRoll = document.getElementById('rollTheDice')
const btnHold = document.getElementById('hold');
const btnEditNames = document.getElementById('editNames');
const dicePic = document.getElementById('dicePic');

score1.textContent = 0;
score2.textContent = 0;
let currentScore = 0;
const scores = [0, 0];
let activePlayer = 1;
let playing = true;

//Fonction Changement de joueur
function switchPlayer() {
    currentScore = 0;
    document.getElementById(`currentScore-${activePlayer}`).textContent = currentScore;
   activePlayer = activePlayer == 1 ? 2 : 1;
    player1.classList.toggle('isActive');
    player2.classList.toggle('isActive');
};

//Bouton de lancer du dé
btnRoll.addEventListener('click', function () {
    if (playing) {
    let roll = Math.floor(Math.random() * ( 7 - 1) + 1);
    console.log(roll)
    document.getElementById('dicePic').src=`dice-six-faces-${roll}.png`
    if (roll !==1) {
        currentScore += roll;
        document.getElementById(`currentScore-${activePlayer}`).textContent = currentScore;
    } else {
        switchPlayer();
    }
    }
});

//Bouton Hold
btnHold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];
        document.getElementById('currentScore-1').textContent = 0;
        document.getElementById('currentScore-2').textContent = 0;
        if (scores[activePlayer] >= 100) {
            playing = false;
            dicePic.classList.add('hidden');
            document.getElementById(`score-${activePlayer}`).textContent = ' You Won ! \ud83d\ude00';
            switchPlayer();
            document.getElementById(`score-${activePlayer}`).textContent = 'You Lost ! \ud83d\ude41';
        } else {
            switchPlayer();
        }
    }
});

//Bouton Nouveau Jeu
btnNewGame.addEventListener('click', function () {
    playing = true;
    activePlayer = 1;
    document.getElementById('player1').classList.add('isActive');
    document.getElementById('player2').classList.remove('isActive');
    scores[1] = 0;
    scores[2] = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('score-2').textContent = 0;
    document.getElementById('currentScore-1').textContent = 0;
    document.getElementById('currentScore-2').textContent = 0;
    console.clear();
});
