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

module.exports = middle;