const mappedArray = (arr, callback) => {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    const newNumber = callback(arr[i]);
    newArray = [...newArray, newNumber];
  }

  return newArray;
};

module.exports = { mappedArray };
