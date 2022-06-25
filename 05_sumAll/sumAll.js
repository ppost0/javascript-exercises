const sumAll = function(x, y) {
  let sum = 0;
  let start;
  let end;
  if (x < 0 || y < 0) {
    return 'ERROR';
  }
  if (typeof(x) !== 'number' || typeof(y) !== 'number') {
    return 'ERROR';
  }
  if (x > y) {
    start = y;
    end = x;
  } else {
    start = x;
    end = y;
  }
  while (start <= end) {
    sum += start;
    start++
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
