/* implement a function called countUniqueValues, which accepts
a sorted array, and counts the unique values in the array. There can
be negative numbers in the array, but it will always be sorted */

const arr = [];

function countUniqueValues(myArray) {
  if (myArray.length === 0) {
    return 0;
  }
  let i = 0;
  let j = i + 1;

  while (j < myArray.length) {
    if (myArray[i] === myArray[j]) {
      j++;
      console.log(`i: ${i}`);
      console.log(`j: ${j}`);
    } else {
      i++;
      myArray[i] = myArray[j];
      j++;
      console.log(`i: ${i}`);
      console.log(`j: ${j}`);
    }
  }
  const iIndex = myArray.indexOf(myArray[i]);
  console.log(iIndex);
  return iIndex + 1;
}

const time = performance.now();
console.log(countUniqueValues(arr), time / 1000);
