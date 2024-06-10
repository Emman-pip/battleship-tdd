const { Ship } = require("../src/index");
const { Gameboard } = require("../src/index");

describe("#Ship factory", () => {
  it("Ship exists.", () => {
    expect(Ship).not.toBeUndefined();
  });
  const entries = [
    [
      ["a", 1],
      ["a", 2],
      ["a", 3],
    ],
    [
      ["b", 1],
      ["b", 2],
      ["b", 3],
      ["b", 4],
    ],
    [
      ["c", 1],
      ["c", 2],
    ],
    [
      ["j", 1],
      ["j", 2],
      ["j", 3],
      ["j", 4],
    ],
  ];
  it("isSunk works", () => {
    entries.forEach((entry) => {
      const s = Ship(entry);
      s.hit = s.len;
      expect(s.isSunk).toBeTruthy();
    });
  });
  it("hit can increment", () => {
    entries.forEach((entry) => {
      const e = Ship(entry);
      for (let i = 0; i < e.len; i++) {
        expect(e.hit).toEqual(i);
        e.hit++;
      }
    });
  });
  // it("coordinate matches length", () => {});
});

// describe("#Gameboard", () => {
//   it("Gameboard exists.", () => {
//     expect(Gameboard).not.toBeUndefined();
//   });
// });
