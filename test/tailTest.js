const { assert } = require('chai');
const tail = require('../tail');

describe("#tail", () => {
  const result = tail(["Hello", "Lighthouse", "Labs"]);
  const words = ["Yo Yo", "Lighthouse", "Labs"];

  it("returns 2 for ['Hello', 'Lighthouse', 'Labs'].length", () => {
    assert.strictEqual(result.length, 2);
  });
  it("returns 'Lighthouse' for ['Hello', 'Lighthouse', 'Labs'][0]", () => {
    assert.strictEqual(result[0], "Lighthouse"); 
  });
  it("returns 'Labs' for ['Hello', 'Lighthouse', 'Labs'][1]", () => {
    assert.strictEqual(result[1], "Labs");
  });
  it("returns 2 for ['Yo Yo', 'Lighthouse', 'Labs'].length", () => {
    assert.strictEqual(tail(words).length, 2); 
  });
});