import './style.css';
import gameBoard from './gameBoard';
import players from './players';
import domControl from './domControl';

// sleep function i found on https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

domControl().initializeGrids();
const playerGrid = domControl().translateGridIntoArray(document.querySelector('.grid'));
const enemyGrid = domControl().translateGridIntoArray(document.querySelector('.enemyGrid'));

const player = players('player');
const computer = players('computer');

document.querySelector('.modeSelector').addEventListener('click', function() {
    if (document.querySelector('.modeSelector').innerHTML == 'Horizontal') {
        document.querySelector('.modeSelector').innerHTML = 'Vertical';
    } else {
        document.querySelector('.modeSelector').innerHTML = 'Horizontal';
    }
});

let placedShipsNum = 0;
domControl().placeShips(placedShipsNum, player, playerGrid);

document.querySelector('.start').addEventListener('click', function() {
    if (gameBoard().allShipsPlaced(player.playerGameBoard.board)) {
        domControl().startGame(computer);
        domControl().gridInput(player, enemyGrid, computer, playerGrid);
    }
});

export default sleep;