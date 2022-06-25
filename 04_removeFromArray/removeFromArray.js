const removeFromArray = function(arr) {
  let removals = Array.prototype.slice.call(arguments, 1);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!(removals.includes(arr[i]))) {
      result.push(arr[i]);
    }
  }
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
