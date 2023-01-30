//write a function called same which accepts 2 arrays
/*  the function should return true if every value in the array has it's corresponding
value squared in the second array. The frequency of the values must be the same */

const compareArraysSquared = (a, b) =>
  a.length === b.length &&
  a.every((element, index) => element * element === b[index]);

const array1 = [1, 2, 3];
const array2 = [1, 4, 9];

console.log(compareArraysSquared(array1, array2));
