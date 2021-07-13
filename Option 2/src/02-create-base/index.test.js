const createBase = require('.');

describe('createBase', () => {
  it('returns a function that adds a specified number to the input for positive numbers', () => {
    const addTen = createBase(10);

    expect(addTen(6)).toEqual(16);
    expect(addTen(12)).toEqual(22);
    expect(addTen(-40)).toEqual(-30);
  });

  it('returns a function that subtracts a specified number from the input for negative numbers', () => {
    const subtractTwenty = createBase(-20);

    expect(subtractTwenty(6)).toEqual(-14);
    expect(subtractTwenty(12)).toEqual(-8);
    expect(subtractTwenty(-40)).toEqual(-60);
  });
});
