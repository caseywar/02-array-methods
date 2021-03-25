const every = require('./every.js');

describe('every function', () => {
  it('takes an array and returns a true value if all callbacks return a truthy value', () => {
    const array = [2, 2, 2, 2];
    const callback = (n) => n < 13;

    expect(every(array, callback)).toBeTruthy();
  });
});
