const Ship = (len) => {
  const length = len;
  return {
    getLength: () => length,
    hits: 0,
    isSunk: () => {
      return hit === length ? true : false;
    },
  };
};

module.exports = { Ship };
