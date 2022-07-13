const fibonacci = function(input) {
  if (input < 0) {return 'OOPS'};
  let a = 0;
  let b = 1;

  for (let i = 1; i < input; i++) {
    let bOld = b;
    b = a + b;
    a = bOld;
  }
 return b;
};

// Do not edit below this line
module.exports = fibonacci;
