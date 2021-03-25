const findIndex = require('./findIndex.js');

describe('find index function', () => {
  it('takes an array and a callack and returns the index for the first item whos callback is truthy', () => {
    const array = ['casey', 'jenna', 'marissa', 'evie', 'billy'];
    const callback = (item) => item.startsWith('m');

    expect(findIndex(array, callback)).toEqual(2);
  });
});
