const assert = require('assert');
const rotateArray = require('../rotate').rotateArray;

describe('rotateArray()', function () {
  it('should return - an array shifted, pushed and joined', function () {
    let input = [3, 2, 9, 4, 5, 1];
    let actual = rotateArray(input);
    console.log(actual, '11');
    let expected = '294513';
    console.log(expected, '99');
    assert.equal(actual, expected);
  });
});
