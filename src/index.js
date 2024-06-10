const Ship = (len) => {
  return {
    len: len,
    hit: 0,
    isSunk: this.len == this.hit ? true : false,
  };
};

module.exports = { Ship };
