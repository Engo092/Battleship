function shipFactory(length) {
    let ship = {};

    // loads ship
    for (let i = 0; i < length; i++) {
        ship[i] = '';
    }

    return {
        ship: ship,
        length: length,
        hit(pos) {
            this.ship[pos] = 'hit';
        },
        isSunk() {
            for (let i = 0; i < this.length; i++) {
                if (this.ship[i] != 'hit') {
                    return false;
                }
            }
            return true;
        }
    }
}

module.exports = shipFactory;