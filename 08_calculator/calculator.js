const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

const multiply = function(arr) {
  var numbers = arr;
  let product = numbers.reduce(function(total, number) {
    return total *= number;
  })
  return product;
};

const power = function(n, exp) {
  return n ** exp;
};

const factorial = function(n) {
  if (n === 1) {
    return 1;
  }
  if (n < 1) {
    return 1;
  }
  if (n > 1) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
