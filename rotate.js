function rotateArray(numList) {
  let loopLimit = numList[0];
  for (var i = 0; i < loopLimit; i++) {
    let num = numList.shift();
    numList.push(num);
  }

  return numList.join('');
}

module.exports = {
  rotateArray,
};
