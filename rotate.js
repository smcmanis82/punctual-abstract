function rotateArray(numList) {
  let num = numList.shift();
  numList.push(num);
  return numList.join('');
}

module.exports = {
  rotateArray,
};
