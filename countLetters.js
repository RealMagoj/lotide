// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected)=> {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const countLetters = (string)=> {
  const results = {};
  for (const letter of string) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

assertEqual(countLetters('LHL')["L"], 2);
assertEqual(countLetters('I once got busy in a Burger King bathroom')["o"], 4);