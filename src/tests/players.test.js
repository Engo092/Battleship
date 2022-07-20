const players = require('../players');

test('cannot shoot at the same place twice', () => {
    const testPlayer = players('computer');
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 10; j++) {
            testPlayer.playerGameBoard.receiveAttack(j, i);
        }
    }
    expect(testPlayer.aiPlay(testPlayer.playerGameBoard.board)[1]).toEqual(9);
});