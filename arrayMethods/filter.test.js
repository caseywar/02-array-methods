const filter = require('./filter.js');

describe('filter function', () => {
  it('returns a filtered array with only true elements returned', () => {
    const array = [1, 2, 4, 'yo', 6, 'sup'];
    const callback = (n) => typeof n === 'number';

    expect(filter(array, callback)).toEqual([1, 2, 4, 6]);
  });
});
