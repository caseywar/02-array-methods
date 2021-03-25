const mappedArray = (arr, callback) => {
  let newArray = [];

  for (const item of arr) {
    const newNumber = callback(item);
    newArray = [...newArray, newNumber];
  }

  // for (let i = 0; i < arr.length; i++) {
  //   const newNumber = callback(arr[i]);
  //   newArray = [...newArray, newNumber];
  // }

  return newArray;
};

module.exports = { mappedArray };
