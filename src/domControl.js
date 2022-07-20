import gameBoard from './gameBoard';
import sleep from '.';

function domControl() {
    function loadGrid(grid) {
        for (let i = 0; i < 10; i++) {
            let newColumn = document.createElement('div');
            newColumn.classList.add('column');
            for (let j = 0; j < 10; j++) {
                let square = document.createElement('div');
                square.classList.add('square');
                newColumn.appendChild(square);
            }
            grid.appendChild(newColumn);
        }
    }

    function displayMsg(num) {
        const playerMsg = document.querySelector('.playerMsg');
        switch (num) {
            case 0:
                playerMsg.innerHTML = 'Please place your carrier!';
                break
            case 1:
                playerMsg.innerHTML = 'Please place your battleship!';
                break
            case 2:
                playerMsg.innerHTML = 'Please place your first cruiser!';
                break
            case 3:
                playerMsg.innerHTML = 'Please place your second cruiser!';
                break
            case 4:
                playerMsg.innerHTML = 'Please place your destroyer!';
                break
            default:
                playerMsg.innerHTML = 'Start the game!';
        }
    }

    function determineLen(placedShipsNum) {
        switch (placedShipsNum) {
            case 0:
                return 5;
            case 1:
                return 4;
            case 2:
            case 3:
                return 3;
            case 4:
                return 2;
            case 5:
                return null;
        }
    }

    function displayHitMsg(shipLen, playerHit) {
        const playerMsg = document.querySelector('.playerMsg');
        switch (shipLen) {
            case 5:
                if (playerHit == 'computer') {
                    playerMsg.innerHTML = 'You sunk the enemy Carrier!';
                } else {
                    playerMsg.innerHTML = 'The enemy sunk your Carrier!';
                }
                break;
            case 4:
                if (playerHit == 'computer') {
                    playerMsg.innerHTML = 'You sunk the enemy Battleship!';
                } else {
                    playerMsg.innerHTML = 'The enemy sunk your Battleship!';
                }
                break;
            case 3:
                if (playerHit == 'computer') {
                    playerMsg.innerHTML = 'You sunk the enemy Cruiser!';
                } else {
                    playerMsg.innerHTML = 'The enemy sunk your Cruiser!';
                }
                break;
            case 2:
                if (playerHit == 'computer') {
                    playerMsg.innerHTML = 'You sunk the enemy Destroyer!';
                } else {
                    playerMsg.innerHTML = 'The enemy sunk your Destroyer!';
                }
                break;
        }
    }

    function checkValidity(length, y, x, alignment, grid) {
        if (alignment == 'horizontal') {
            if (x + length > 10) {
                return false;
            }
            for (let i = x; i < x + length; i++) {
                if (grid[y].children[i].style.backgroundColor == 'darkblue') {
                    return false;
                }
            }
        } else {
            if (y + length > 10) {
                return false;
            }
            for (let i = y; i < y + length; i++) {
                if (grid[i].children[x].style.backgroundColor == 'darkblue') {
                    return false;
                }
            }
        }
        return true;
    }

    function simulatePosition(y, x, grid, length, alignment) {
        if (checkValidity(length, y, x, alignment, grid) == true) {
            if (alignment == 'horizontal') {
                for (let i = x; i < x + length; i++) {
                    grid[y].children[i].style.backgroundColor = 'lightblue';
                }
            } else {
                for (let i = y; i < y + length; i++) {
                    grid[i].children[x].style.backgroundColor = 'lightblue';
                }
            }
        }
    }

    function recolorGrid(grid) {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].children.length; j++) {
                if (grid[i].children[j].style.backgroundColor != 'darkblue') {
                    grid[i].children[j].style.backgroundColor = 'rgba(227, 255, 255, 0.336)';
                }
            }
        }
    }

    async function computerPlay(computer, player, playerGrid) {
        const playerMsg = document.querySelector('.playerMsg');
        playerMsg.innerHTML = 'Enemy is aiming...';
        await sleep(500);
        const attackedCoordenates = computer.aiPlay(player.playerGameBoard.board);
        playerMsg.innerHTML = 'Enemy has fired, and...';
        await sleep(500);
        player.playerGameBoard.receiveAttack(attackedCoordenates[0], attackedCoordenates[1]);
        registerAttack(player, playerGrid, attackedCoordenates[1], attackedCoordenates[0]);
        const squares = document.querySelector('.enemyGrid').querySelectorAll('.square');
        if (checkForWin(player)) {
            finishGame(computer);
        } else {
            for (let i = 0; i < squares.length; i++) {
                squares[i].style.pointerEvents = 'auto';
            }
        }   
    }

    function registerAttack(player, grid, i, j) {
        const playerMsg = document.querySelector('.playerMsg');
        const hitCircle = document.createElement('span');
        if (player.playerGameBoard.board[i][j]['coordinates']) {
            let board = player.playerGameBoard.board;
            hitCircle.classList.add('hit');
            playerMsg.innerHTML = '...hit!';

            // changes message to be displayed if ship was sunk
            if (board[board[i][j]['coordinates'][1]][board[i][j]['coordinates'][0]]['ship'].isSunk()) {
                let shipLen = board[board[i][j]['coordinates'][1]][board[i][j]['coordinates'][0]]['ship'].length;
                displayHitMsg(shipLen, player.type);
            }
        } else {
            hitCircle.classList.add('attacked');
            playerMsg.innerHTML = '...missed.';
        }
        grid[i].children[j].appendChild(hitCircle);
        grid[i].children[j].classList.add('disabled');
    }

    function checkForWin(attackedPlayer) {
        if (attackedPlayer.playerGameBoard.allSunk() == true) {
            return true;
        }
        return false;
    }

    function finishGame(winner) {
        if (winner.type == 'player') {
            document.querySelector('.playerMsg').innerHTML = 'Congratulations! You win.';
        } else {
            document.querySelector('.playerMsg').innerHTML = 'Computer wins, game over.';
        }
        restartGame();
    }

    function restartGame() {
        document.querySelector('.start').remove();
        const buttons = document.querySelector('.btnDiv');
        const restart = document.createElement('div');
        restart.classList.add('restart');
        restart.innerHTML = 'Restart';
        buttons.appendChild(restart);
        restart.addEventListener('click', (() => { window.location.reload() }));
    }

    function createModeSelector(grid) {
        const modeSelector = document.createElement('button');
        modeSelector.classList.add('modeSelector');
        modeSelector.innerHTML = 'Horizontal';
        grid.appendChild(modeSelector);
    }
    
    return {
        initializeGrids() {
            const grid = document.querySelector('.grid');
            const enemyGrid = document.querySelector('.enemyGrid');
            loadGrid(grid);
            createModeSelector(grid);
            loadGrid(enemyGrid);
        },
        startGame(computer) {
            gameBoard().placeComputerShips(computer);
            const start = document.querySelector('.start');
            const modeSelector = document.querySelector('.modeSelector');
            start.classList.add('hide');
            modeSelector.classList.add('hide');
            modeSelector.style.pointerEvents = 'none';
            const playerMsg = document.querySelector('.playerMsg');
            playerMsg.innerHTML = 'Your turn!';
            const squares = document.querySelector('.grid').querySelectorAll('.square');
            for (let i = 0; i < squares.length; i++) {
                squares[i].style.pointerEvents = 'none';
            }
        },
        translateGridIntoArray(grid) {
            const gridItems = grid.children;
            const gridArray = Array.from(gridItems);
            if (gridArray[0].classList.contains('playerMsg')) {
                gridArray.splice(0, 1);
            }
            if (gridArray.length > 10) {
                gridArray.pop();
            }
            return gridArray;
        },
        colorGrid(board, grid) {
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    if (board[i][j]['coordinates']) {
                        grid[i].children[j].style.backgroundColor = 'darkBlue';
                    }
                }
            }
        },
        placeShips(placedShips, player, grid) {
            displayMsg(placedShips);
            for (let i = 0; i < grid.length; i++) {
                for (let j = 0; j < grid[i].children.length; j++) {
                    grid[i].children[j].addEventListener('click', function() {
                        if (!document.querySelector('.start').classList.contains('hide')) {
                            let length = determineLen(placedShips);
                            const alignment = document.querySelector('.modeSelector').textContent.toLowerCase();
                            const valid = checkValidity(length, i, j, alignment, grid);
                            if (valid != false) {
                                player.playerGameBoard.placeShip(alignment, length, j, i);
                                placedShips += 1;
                                displayMsg(placedShips);
                                domControl().colorGrid(player.playerGameBoard.board, grid);
                            }
                        }
                    });
                    grid[i].children[j].addEventListener('mouseover', function() {
                        if (placedShips < 5) {
                            let length = determineLen(placedShips);
                            const alignment = document.querySelector('.modeSelector').textContent.toLowerCase();
                            simulatePosition(i, j, grid, length, alignment);
                        }
                    });
                    grid[i].children[j].addEventListener('mouseout', (() => { recolorGrid(grid) }));
                }
            }
        },
        gridInput(player, grid, computer, playerGrid) {
            const playerMsg = document.querySelector('.playerMsg');
            for (let i = 0; i < grid.length; i++) {
                for (let j = 0; j < grid[i].children.length; j++) {
                    grid[i].children[j].addEventListener('click', async function() {
                        if (!computer.playerGameBoard.board[i][j]['hit']) {
                            const squares = document.querySelector('.enemyGrid').querySelectorAll('.square');
                            for (let i = 0; i < squares.length; i++) {
                                squares[i].style.pointerEvents = 'none';
                            }
                            playerMsg.innerHTML = 'Shots fired! And...';
                            await sleep(500);
                            computer.playerGameBoard.receiveAttack(j, i);
                            registerAttack(computer, grid, i, j);
                            await sleep(1000)
                            if (checkForWin(computer) == true) {
                                finishGame(player);
                            } else {
                                computerPlay(computer, player, playerGrid);
                            }
                        }
                    })
                }
            }
        }
    }
}

export default domControl;