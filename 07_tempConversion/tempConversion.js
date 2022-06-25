const ftoc = function(temp) {
  temp = temp - 32;
  temp = temp * (5 / 9);
  temp = Math.round(temp * 10) / 10
  return temp;
};

const ctof = function(temp) {
  temp = temp * (9 / 5);
  temp = temp + 32;
  temp = Math.round(temp * 10) / 10
  return temp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
