const shipFactory = require('../shipFactory');

test('creates ship properly', () => {
    expect(shipFactory(2).ship).toEqual({'0':'', '1':''});
});

test('registers hit', () => {
    const shipDummy = shipFactory(3);
    shipDummy.hit(1);
    expect(shipDummy.ship).toEqual({'0':'', '1':'hit', '2':''});
});

test('registers if ship has not sunk', () => {
    const shipDummy = shipFactory(2);
    shipDummy.hit(1);
    expect(shipDummy.isSunk()).toEqual(false);
});

test('registers if ship has sunk', () => {
    const shipDummy = shipFactory(2);
    shipDummy.hit(0);
    shipDummy.hit(1);
    expect(shipDummy.isSunk()).toEqual(true);
});