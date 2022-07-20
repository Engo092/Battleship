const gameBoard = require('../gameBoard');
const shipFactory = require('../shipFactory');

test('creates gameBoard', () => {
    expect(gameBoard().board).toEqual({
        '0': {'0': {}, '1': {}, '2': {}, '3': {}, '4': {}, '5': {}, '6': {}, '7': {}, '8': {}, '9': {}},
        '1': {'0': {}, '1': {}, '2': {}, '3': {}, '4': {}, '5': {}, '6': {}, '7': {}, '8': {}, '9': {}},
        '2': {'0': {}, '1': {}, '2': {}, '3': {}, '4': {}, '5': {}, '6': {}, '7': {}, '8': {}, '9': {}},
        '3': {'0': {}, '1': {}, '2': {}, '3': {}, '4': {}, '5': {}, '6': {}, '7': {}, '8': {}, '9': {}},
        '4': {'0': {}, '1': {}, '2': {}, '3': {}, '4': {}, '5': {}, '6': {}, '7': {}, '8': {}, '9': {}},
        '5': {'0': {}, '1': {}, '2': {}, '3': {}, '4': {}, '5': {}, '6': {}, '7': {}, '8': {}, '9': {}},
        '6': {'0': {}, '1': {}, '2': {}, '3': {}, '4': {}, '5': {}, '6': {}, '7': {}, '8': {}, '9': {}},
        '7': {'0': {}, '1': {}, '2': {}, '3': {}, '4': {}, '5': {}, '6': {}, '7': {}, '8': {}, '9': {}},
        '8': {'0': {}, '1': {}, '2': {}, '3': {}, '4': {}, '5': {}, '6': {}, '7': {}, '8': {}, '9': {}},
        '9': {'0': {}, '1': {}, '2': {}, '3': {}, '4': {}, '5': {}, '6': {}, '7': {}, '8': {}, '9': {}}
    });
});

test('places ship horizontally into board', () => {
    const testBoard = gameBoard();
    testBoard.placeShip('horizontal', 2, 1, 6);
    expect(testBoard.board[6][2]).toEqual({'coordinates': [1, 6]});
});

test('places ship vertically into board', () => {
    const testBoard = gameBoard();
    testBoard.placeShip('vertical', 2, 1, 6);
    expect(testBoard.board[7][1]).toEqual({'coordinates': [1, 6]});
});

test('ship is created correctly', () => {
    const testBoard = gameBoard();
    const testShip = shipFactory(2);
    testBoard.placeShip('vertical', 2, 1, 6);
    expect(testBoard.board[6][1]['ship'].length).toEqual(testShip.length);
});

test('registers attack', () => {
    const testBoard = gameBoard();
    testBoard.placeShip('vertical', 4, 1, 6);
    testBoard.receiveAttack(1, 9);
    expect(testBoard.board[9][1]['hit']).toEqual(true);
});

test('registers hit on a ship', () => {
    const testBoard = gameBoard();
    testBoard.placeShip('horizontal', 4, 1, 4);
    testBoard.receiveAttack(2, 4);
    expect(testBoard.board[4][1]['ship'].ship[1]).toEqual('hit');
});

test('checks if all ships have been sunk', () => {
    const testBoard = gameBoard();
    testBoard.placeShip('horizontal', 2, 1, 4);
    testBoard.receiveAttack(1, 4);
    testBoard.receiveAttack(2, 4);
    expect(testBoard.allSunk()).toEqual(true);
});

test('checks if not all ships have been sunk', () => {
    const testBoard = gameBoard();
    testBoard.placeShip('horizontal', 2, 1, 4);
    testBoard.receiveAttack(1, 4);
    testBoard.receiveAttack(2, 4);
    testBoard.placeShip('vertical', 2, 6, 1);
    expect(testBoard.allSunk()).toEqual(false);
});