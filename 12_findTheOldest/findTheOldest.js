const findTheOldest = function(arr) {
  let oldest;
  let age = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].yearOfDeath) {
      arr[i].yearOfDeath = (new Date).getFullYear();
    }


    if (arr[i].yearOfDeath - arr[i].yearOfBirth > age) {
      oldest = arr[i];
      age = arr[i].yearOfDeath - arr[i].yearOfBirth;
    }
  }
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
