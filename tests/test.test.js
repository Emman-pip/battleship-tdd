const { Ship } = require("../src/index");

describe("#Ship factory", () => {
  it("Ship exists.", () => {
    expect(Ship).not.toBeUndefined();
  });
  const ship = Ship(2);
  // length, #hits, is sunk
  it("has getLength", () => {
    expect(ship.getLength).not.toBeUndefined();
  });
  it("has number of hits", () => {
    expect(ship.hits).not.toBeUndefined();
  });
  it("has isSunkMethod", () => {
    expect(ship.isSunk).not.toBeUndefined();
  });
  it("get length works", () => {
    for (let i = 0; i < 5; i++) {
      const sTest = Ship(i);
      expect(sTest.getLength()).toEqual(i);
    }
  });
});
