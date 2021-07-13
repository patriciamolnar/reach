const sortArray = require('.');

describe('sortArray', () => {
  it('returns an empty array if the input is empty', () => {
    expect(sortArray([])).toEqual([]);
  });

  it('sorts an Array of integers correctly', () => {
    const arrStub = [12, 21, -3, 14, 5, 62, 9, -12, 1, -3, 62];
    const expectedResult = [-12, -3, -3, 1, 5, 9, 12, 14, 21, 62, 62];

    expect(sortArray(arrStub)).toEqual(expectedResult);
  });

  it('throws a TypeError when the input is not an Array of integers', () => {
    const invalidInputs = [
      'string',
      123,
      true,
      {},
      ['asd', 'ttt'],
      [1, 'asd'],
      [false, 2],
      [3, undefined],
      [4.6, 1.234, 9.1],
      [1, 2, Infinity, 3],
    ];

    invalidInputs.forEach(invalidInput =>
      expect(() => sortArray(invalidInput)).toThrowError(TypeError),
    );
  });
});
