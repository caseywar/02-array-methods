const filter = (array, callback) => {
  let filteredArray = [];
  for (let item of array) {
    if (callback(item)) {
      filteredArray = [...filteredArray, item];
    }
  }
  return filteredArray;
};

module.exports = filter;
