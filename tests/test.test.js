const { Ship } = require("../src/index");
const { Gameboard } = require("../src/index");

describe("#Ship factory", () => {
  it("Ship exists.", () => {
    expect(Ship).not.toBeUndefined();
  });
  it("isSunk works", () => {
    for (let i = 0; i < 100; i++) {
      const s = Ship(10);
      s.hit = 10;
      expect(s.isSunk).toBeTruthy();
    }
  });
  it("hit can increment", () => {
    const s = Ship(100);
    for (let i = 0; i < 100; i++) {
      expect(s.hit).toEqual(i);
      s.hit++;
    }
  });
});

// describe("#Gameboard", () => {
//   it("Gameboard exists.", () => {
//     expect(Gameboard).not.toBeUndefined();
//   });
// });
