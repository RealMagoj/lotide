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

const letterPositions = (string)=> {
  const results = {};
  for (const letter in string) {
    if (string[letter] !== ' ') {
      if (results[string[letter]]) {
        results[string[letter]].push(Number(letter));
      } else {
        results[string[letter]] = [Number(letter)];
      }
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions('hello')["l"], [2, 3]);
assertArraysEqual(letterPositions('LHL')["L"], [0, 2]);
assertArraysEqual(letterPositions('I once got busy in a Burger King bathroom')["o"], [2, 8, 38, 39]);