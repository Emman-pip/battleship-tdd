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

describe("#Gameboard", () => {
  it("Gameboard exists.", () => {
    expect(Gameboard).not.toBeUndefined();
  });
  const g = new Gameboard(
    Ship([
      ["a", 1],
      ["b", 1],
    ]),
  );
  it("receive attack (hit)", () => {
    expect(g.receiveAttack(["a", 1])).toBeTruthy();
    expect(g.receiveAttack(["b", 1])).toBeTruthy();
  });
  it("receive attack (miss)", () => {
    expect(g.receiveAttack(["c", 1])).toBeFalsy();
    expect(g.receiveAttack(["t", 1])).toBeFalsy();
  });
  it("receive attack (already done)", () => {
    expect(g.receiveAttack(["a", 1])).toBeNull();
    expect(g.receiveAttack(["b", 1])).toBeNull();
  });
  it("missed attacks", () => {
    expect(g.misses.toString()).toMatch(
      [
        ["c", 1],
        ["t", 1],
      ].toString(),
    );
  });
  it("hit attacks", () => {
    expect(g.hits.toString()).toMatch(
      [
        ["a", 1],
        ["b", 1],
      ].toString(),
    );
  });
  it("all sunk", () => {
    expect(g.allSunk()).toBeTruthy();
  });
});
