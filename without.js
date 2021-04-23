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
};

const without = (sourceArray, removeItemsArray)=> {
  let result = [];
  for (let item in sourceArray) {
    let match = false;
    for (let removeItem in removeItemsArray) {
      if (removeItemsArray[removeItem] === sourceArray[item]) {
        match = true;
      }
    }
    if (!match) {
      result.push(sourceArray[item]);
    }
  }
  return result;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);