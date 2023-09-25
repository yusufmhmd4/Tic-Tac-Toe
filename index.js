let currentPlayer = 'X';
let gameList = ['', '', '', '', '', '', '', '', ''];
let turn = document.getElementById("turn");
const reset = document.getElementById('reset');
const result = document.getElementById('result');

function makeTurn(box) {
    const index = Array.from(box.parentElement.children).indexOf(box);
    if (gameList[index] === '' && !checkWin()) {
        gameList[index] = currentPlayer;
        box.textContent = currentPlayer;
        if (checkWin()) {

            result.textContent = `${currentPlayer}   wins!`;

        } else {
            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
            turn.innerHTML = currentPlayer;
        }
    }
}

function checkWin() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let combo of winningCombos) {
        if (gameList[combo[0]] !== '' &&
            gameList[combo[0]] === gameList[combo[1]] &&
            gameList[combo[1]] === gameList[combo[2]]) {
            return true;
        }
    }
    return false;
}
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.box');
    
    Array.from(boxtexts).forEach(element => {
        element.textContent = "";
    });
    turn.innerHTML = 'X';
    result.textContent = '';
    currentPlayer = "X";
    gameList = ['', '', '', '', '', '', '', '', ''];
});