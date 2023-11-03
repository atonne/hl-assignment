function submitForm() {
  var num1 = parseInt(document.getElementById("num1").value);

  var num2 = parseInt(document.getElementById("num2").value);
  var num3 = parseInt(document.getElementById("num3").value);
  var num4 = parseInt(document.getElementById("num4").value);
  var num5 = parseInt(document.getElementById("num5").value);
  var arr = [num1, num2, num3, num4, num5];
  document.getElementById("result").innerHTML = `${findMinMaxSum(arr)[0]} ${
    findMinMaxSum(arr)[1]
  } `;
}

function findMinMaxSum(arr) {
  arr.sort((a, b) => a - b);
  var minArr = arr.slice(0, 4);
  var minSum = minArr.reduce((a, b) => a + b);

  var maxArr = arr.slice(1);
  var maxSum = maxArr.reduce((a, b) => a + b);

  return [minSum, maxSum];
}
