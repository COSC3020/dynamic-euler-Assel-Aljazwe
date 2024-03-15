const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

// Test factorial function
assert.strictEqual(factorial(0), 1);
assert.strictEqual(factorial(5), 120);
assert.strictEqual(factorial(10), 3628800);

// Test e function with more terms for better precision comparison
assert.strictEqual(e(0), 1);
assert.strictEqual(e(1), 2);
assert.strictEqual(e(5), parseFloat((1 + 1 + 1/2 + 1/6 + 1/24 + 1/120).toFixed(10)));
assert.strictEqual(parseFloat(e(10).toFixed(10)), 2.7182818011);

console.log("All tests passed successfully!");
