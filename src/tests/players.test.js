const gameBoard = require('../gameBoard');
const shipFactory = require('../shipFactory');
const players = require('../players');

test('cannot shoot at the same place twice', () => {
    const testPlayer = players('computer')
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 10; j++) {
            testPlayer.playerGameBoard.receiveAttack(j, i)
        }
    }
    expect(testPlayer.aiPlay(testPlayer.playerGameBoard.board)[1]).toEqual(9);
})

// test('places ship vertically into board', () => {
//     const board = gameBoard()
//     board.placeShip('vertical', 2, 1, 6)
//     expect(board.gameBoard[7][1]).toEqual({'coordinates': [1, 6]});
// })
