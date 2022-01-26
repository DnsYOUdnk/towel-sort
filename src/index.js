
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let resultArr = [];
  if(!matrix) return resultArr;
    matrix.forEach((item, index) => {
      if (index%2 == 0) {
        resultArr.push(...item)
      } else {
        resultArr.push(...item.reverse())
      }
    })
    return resultArr;
}
