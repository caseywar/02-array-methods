const { mappedArray } = require('./arrayMethods.js');

describe('mapped array function', () => {
  it('it should map an array and keep the same length value', () => {
    const array = [5, 6, 7, 8];
    const callback = (number) => number - 4;

    expect(mappedArray(array, callback)).toEqual([1, 2, 3, 4]);
  });
});
