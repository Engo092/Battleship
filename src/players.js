const gameBoard = require('./gameBoard');

function players(playerType) {
    function loopThroughPossibleMoves(board) {
        let possibleMoves = [];
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (board[i][j]['hit'] != true && allAdjacentCheck(board[i][j], board)) {
                    possibleMoves.push([j, i]);
                }
            }
        }
        return possibleMoves;
    }

    function loopThroughPreviousMoves(board) {
        let previousMoves = [];
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {

                // adds to array squares that are part of a ship that hasn't been sunk yet
                if (board[i][j]['hit'] == true && board[i][j]['coordinates']
                && board[board[i][j]['coordinates'][1]][board[i][j]['coordinates'][0]]['ship'].isSunk() == false) {
                    previousMoves.push([j, i]);
                }
            }
        }
        return previousMoves;
    }

    function adjacentCheck(space1, space2) {
        if (((space1[0] == space2[0] + 1 || space1[0] == space2[0] - 1) && space1[1] == space2[1])
        || ((space1[1] == space2[1] + 1 || space1[1] == space2[1] - 1) && space1[0] == space2[0])) {
            return true;
        }
        return false;
    }

    function allAdjacentCheck(square, board) {
        let adjacentSquares = 4;
        let hitSquares = 0;
        if (square[0] == 0 || square[0] == 9 || square[1] == 0 || square[1] == 9) {
            adjacentSquares -= 1;
        }
        if ((square[0] == 0 && square[1] == 9) || (square[0] == 9 || square[1] == 0)
        || (square[1] == 0 && square[0] == 9) || (square[1] == 9 || square[0] == 0)) {
            adjacentSquares -= 1;
        }
        if (square[0] - 1 >= 0 && (board[square[0] - 1][square[1]]['hit'] && !board[square[0]][square[1] + 1]['coordinates'])) {
            hitSquares += 1;
        }
        if (square[0] + 1 <= 9 && (board[square[0] + 1][square[1]]['hit'] && !board[square[0]][square[1] + 1]['coordinates'])) {
            hitSquares += 1;
        }
        if (square[1] - 1 >= 0 && (board[square[0]][square[1] - 1]['hit'] && !board[square[0]][square[1] + 1]['coordinates'])) {
            hitSquares += 1;
        }
        if (square[1] + 1 <= 9 && (board[square[0]][square[1] + 1]['hit'] && !board[square[0]][square[1] + 1]['coordinates'])) {
            hitSquares += 1;
        }
        if (adjacentSquares == hitSquares) {
            return false;
        }
        return true;
    }

    function containsSquare(hitShips, coordinate) {
        for (let i = 0; i < hitShips.length; i++) {
            if (hitShips[i][0] == coordinate[0] && hitShips[i][1] == coordinate[1]) {
                return true;
            }
        }
        return false;
    }

    function checkForShipAdjacency(bestMoves, hitShip) {
        for (let i = 0; i < bestMoves.length; i++) {
            for (let j = 0; j < hitShip.length; j++) {
                if (adjacentCheck(bestMoves[i], hitShip[j])) {
                    if (bestMoves[i][0] == hitShip[j][0]) {
                        if (bestMoves[i][1] + 1 == hitShip[j][1]) {
                            if (containsSquare(hitShip, [bestMoves[i][0], bestMoves[i][1] + 2])) {
                                return bestMoves[i];
                            }
                        } else {
                            if (containsSquare(hitShip, [bestMoves[i][0], bestMoves[i][1] - 2])) {
                                return bestMoves[i];
                            }
                        }
                    } else {
                        if (bestMoves[i][0] + 1 == hitShip[j][0]) {
                            if (containsSquare(hitShip, [bestMoves[i][0] + 2, bestMoves[i][1]])) {
                                return bestMoves[i];
                            }
                        } else {
                            if (containsSquare(hitShip, [bestMoves[i][0] - 2, bestMoves[i][1]])) {
                                return bestMoves[i];
                            }
                        }
                    }
                }
            }
        }
    }

    function getBestMoves(possibleMoves, previouslyHit) {
        let bestMoves = [];
        for (let i = 0; i < previouslyHit.length; i++) {
            for(let j = 0; j < possibleMoves.length; j++) {
                if (adjacentCheck(possibleMoves[j], previouslyHit[i])) {
                    bestMoves.push(possibleMoves[j]);
                }
            }
        }
        return bestMoves;
    }
    
    return {
        
        // playerType is either "player" or "computer"
        type: playerType,
        playerGameBoard: gameBoard(),
        aiPlay(enemyGameBoard) {
            let possibleMoves = loopThroughPossibleMoves(enemyGameBoard);
            const previouslyHitShips = loopThroughPreviousMoves(enemyGameBoard);
            if (previouslyHitShips.length > 0) {
                possibleMoves = getBestMoves(possibleMoves, previouslyHitShips);
                let possiblyBetterMove = checkForShipAdjacency(possibleMoves, previouslyHitShips, enemyGameBoard);
                if (possiblyBetterMove) {
                    return possiblyBetterMove;
                }
            }

            // line below just randomly chooses an array element
            const chosenMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
            return chosenMove;
        }
    }
}

module.exports = players;