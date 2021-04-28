const eqArrays = (array1, array2)=> {
  if (array1.length === array2.length) {
    for (let item in array1) {
      if (array1[item] !== array2[item]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

module.exports = eqArrays;