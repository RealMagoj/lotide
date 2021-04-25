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

const map = (array, callback)=> {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[word.length - 1]);
const results3 = map(words, word => word + 's');
assertArraysEqual(['g', 'c', 't', 'm', 't'], results1);
assertArraysEqual(['d', 'l', 'o', 'r', 'm'], results2);
assertArraysEqual(["grounds", "controls", "tos", "majors", "toms"], results3);