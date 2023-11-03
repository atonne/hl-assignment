function findMinMaxSum(arr) {
  arr.sort((a, b) => a - b);
  var minArr = arr.slice(0, 4);
  var minSum = minArr.reduce((a, b) => a + b);

  var maxArr = arr.slice(1);
  var maxSum = maxArr.reduce((a, b) => a + b);

  console.log(minSum, maxSum);
}
findMinMaxSum();
