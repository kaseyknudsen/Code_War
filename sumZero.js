/* write a function called sumZero which accepts a sorted array of integers.
The function should find the 1st pair where the sum is 0. Return an array that
includes both values that sum to zero or undefined if a pair does not exist */

// const intArray = [-1, 0, 1, 3];

// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     //adding +1 will keep the pointer from comparing it to itself
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }

// console.log(sumZero(intArray));

/* need to refactor to use multiple pointers pattern */

const intArray = [-2, -1, 0, 1, 3, 4];
function sumZero(arr) {
  let left = 0;
  let counter = 0;
  //right = 5
  let right = arr.length - 1;
  while (left < right) {
    console.log(`left: ${left}, right: ${right}`);
    console.log(`counter: ${counter}`);
    //-2 + 4 = 2
    //-2 + 3 = 1
    //-2 + 1 = -1
    //-1 + 1 = 0
    let sum = arr[left] + arr[right];
    console.log(`sum: ${sum}`)
    //if sum === 0, that means we have a pair who's sum equals zero
    //if this is the case, we will return the array with the 2 numbers
    if (sum === 0) {
      return [arr[left], arr[right]];
      //we need to move our right cursor to the left if the sum is too big
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero(intArray));
