const shipFactory = require('./shipFactory');

function gameBoard() {
    let gameBoard = {};
    
    // loads gameboard
    for (let i = 0; i < 10; i++) {
        gameBoard[i] = {};
        for (let j = 0; j < 10; j++) {
            gameBoard[i][j] = {};
        }
    }

    function determineLen(num) {
        switch(num) {
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

    function checkIfValid(board, alignment, x, y, length) {
        if (alignment == 'horizontal') {
            if (x + length > 10) {
                return false;
            }
            for (let i = x; i < x + length; i++) {
                if (board[y][i]['coordinates']) {
                    return false;
                }
            }
        } else {
            if (y + length > 10) {
                return false;
            }
            for (let i = y; i < y + length; i++) {
                if (board[i][x]['coordinates']) {
                    return false;
                }
            }
        }
        return true;
    }

    return {
        board: gameBoard,
        placeShip(mode, length, x, y) {
            this.board[y][x]['ship'] = shipFactory(length);
            this.board[y][x]['mode'] = mode;
            if (mode == 'horizontal') {
                for (let i = 0; i < length; i++) {
                    this.board[y][x + i]['coordinates'] = [x, y];
                }
            } else {
                for (let i = 0; i < length; i++) {
                    this.board[y + i][x]['coordinates'] = [x, y];
                }
            }
        },
        receiveAttack(x, y) {
            let hitSquare = this.board[y][x];
            hitSquare['hit'] = true;

            // checks if attack hits a ship
            if (hitSquare['coordinates']){
                let hitShip = this.board[hitSquare['coordinates'][1]][hitSquare['coordinates'][0]];
                let hitPos = 0;
                if (hitShip['mode'] == 'vertical') {
                    hitPos = y - hitShip['coordinates'][1];
                } else {
                    hitPos = x - hitShip['coordinates'][0];
                }
                hitShip['ship'].hit(hitPos);
            }
        },
        allSunk() {
            let shipNum = 0;
            let sunkAmount = 0;

            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    if (this.board[i][j]['ship']) {
                        shipNum += 1;
                        if (this.board[i][j]['ship'].isSunk()) {
                            sunkAmount += 1;
                        }
                    }
                }
            }
            if (shipNum == sunkAmount) {
                return true;
            }
            return false;
        },
        placeComputerShips(computer) {
            let placedShips = 0;
            const alignments = ['horizontal', 'vertical'];
            while (placedShips < 5) {
                const length = determineLen(placedShips);
                const randomAlignment = alignments[Math.floor(Math.random() * alignments.length)];
                const randomX = Math.floor(Math.random() * (10 - 0));
                const randomY = Math.floor(Math.random() * (10 - 0));
                if (checkIfValid(computer.playerGameBoard.board, randomAlignment, randomX, randomY, length)) {
                    computer.playerGameBoard.placeShip(randomAlignment, length, randomX, randomY);
                    placedShips += 1;
                }
            }
        },
        allShipsPlaced(board) {
            let shipNum = 0;
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    if (board[i][j]['ship']) {
                        shipNum += 1;
                    }
                }
            }
            if (shipNum < 5) {
                return false;
            }
            return true;
        }
    }
}

module.exports = gameBoard;