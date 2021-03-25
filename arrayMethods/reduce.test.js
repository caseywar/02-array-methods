const reduce = require('./reduce.js');

describe('reduce function', () => {
  it('Takes an Array and callback and a second initialValue parameter that is the initial value of the accumulator. The return value is passed as the accumulator argument of the next function call.', () => {
    const array = [1, 2, 3, 4];
    const callback = (accumulator, item) => item + accumulator;
    let initialValue = 5;

    expect(reduce(array, callback, initialValue)).toEqual(15);
  });
});
