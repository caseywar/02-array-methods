const every = (array, callback) => {
  for (let item of array) {
    if (!callback(item)) return false;
  }
  return true;
};

module.exports = every;
