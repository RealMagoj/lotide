// FUNCTION IMPLEMENTATION
const assertArraysEqual = (actual, expected)=> {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

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

const middle = (array)=> {
  const result = [];
  if (array.length > 2) {
    if (array.length %2 === 0) {
      result.push(array[array.length / 2 - 1]);
      result.push(array[array.length / 2]);
    } else {
      result.push(array[Math.ceil(array.length / 2 - 1)]);
    }
  }
  return result;
}

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);