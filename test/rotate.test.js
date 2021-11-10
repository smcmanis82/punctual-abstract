const assert = require('assert');
const rotateArray = require('../rotate').rotateArray;

describe('rotateArray()', function () {
  it('should return - empty array test', function () {
    let input = [];
    let actual = rotateArray(input);
    let expected = '';
    assert.equal(actual, expected);
  });
  it('should return - small array test - rotate one time', function () {
    let input = [1, 2, 3];
    let actual = rotateArray(input);
    let expected = '231';
    assert.equal(actual, expected);
  });
  it('should return - small array test - rotate twice', function () {
    let input = [2, 1, 3];
    let actual = rotateArray(input);
    let expected = '321';
    assert.equal(actual, expected);
  });
  it('should return - small array test - rotate three times', function () {
    let input = [3, 1, 2, 4];
    let actual = rotateArray(input);
    let expected = '4312';
    assert.equal(actual, expected);
  });
});
