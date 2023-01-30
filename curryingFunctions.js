/* multiply all elements in an array */

const multiplyAll = (myArray) => 
(num) => myArray.map((number) => number * num);

console.log(multiplyAll([1, 2, 3])(2))