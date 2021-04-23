// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected)=> {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const eqArrays = (array1, array2)=> {
  let result;
  if (array1.length === array2.length) {
    for (let item in array1) {
      if (array1[item] === array2[item]) {
        result = true;
      } else {
        return false;
      }
    }
    return result;
  } else {
    return false;
  }
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);