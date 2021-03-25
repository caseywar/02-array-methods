const reduce = (array, callback, initialValue) => {
  let accumulator = initialValue;
  for (let item of array) accumulator = callback(accumulator, item);
  return accumulator;
};

module.exports = reduce;
