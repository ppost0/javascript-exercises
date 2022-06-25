const reverseString = function(str) {
  let splitStr = str.split('');
  let reverseStr = splitStr.reverse();
  let result = reverseStr.join('')
  return result;
};

// Do not edit below this line
module.exports = reverseString;
