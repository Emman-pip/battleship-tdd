const Ship = (arr) => {
  return {
    len: arr.length,
    hit: 0,
    isSunk: this.len == this.hit ? true : false,
    location: arr,
  };
};

class Gameboard {
  constructor(...ships) {
    this.pieces = [...ships];
    this.misses = [];
    this.hits = [];
  }

  receiveAttack(coordinates) {
    let flag = false;
    this.pieces.forEach((ship) => {
      ship.location.forEach((coordinate) => {
        if (coordinate.toString() === coordinates.toString()) {
          if (
            this.misses.toString().includes(coordinates.toString()) ||
            this.hits.toString().includes(coordinates.toString())
          ) {
            flag = null;
          } else {
            flag = true;
            ship.hit++;
          }
          this.hits.push(coordinates);
          return;
        }
      });
    });
    if (flag === false && flag !== null) {
      this.misses.push(coordinates);
    }
    return flag;
  }
  allSunk() {
    for (let i = 0; i < this.pieces.length; i++) {
      if (this.pieces[i].isSunk) {
        return true;
      }
    }
    return false;
  }
}

module.exports = { Ship, Gameboard };
