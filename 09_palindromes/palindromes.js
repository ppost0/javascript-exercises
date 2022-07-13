const palindromes = function (input) {
  var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

  function removePunctuation(string) {
    return string.replace(regex, '');
  }

  input = removePunctuation(input); //remove punctuation
  input = input.toLowerCase();  //make capital letters lowercase
  input = input.replace(/\s+/g, ''); //remove space

  let split = input.split('');
  let reverse = split.reverse();
  reverse = reverse.join('');

  if (reverse === input) {
    return true
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
