const gameBoard = require('./gameBoard');

function players(playerType) {
    function loopThroughPossibleMoves(board) {
        let possibleMoves = [];
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (board[i][j]['hit'] != true) {
                    possibleMoves.push([j, i]);
                }
            }
        }
        return possibleMoves;
    }
    
    return {
        // playerType is either "player" or "computer"
        type: playerType,
        playerGameBoard: gameBoard(),
        aiPlay(enemyGameBoard) {
            const possibleMoves = loopThroughPossibleMoves(enemyGameBoard);

            // line below just randomly chooses an array element
            const chosenMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
            return chosenMove;
        }
    }
}

module.exports = players;