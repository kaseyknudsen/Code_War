/* write a function which accepts an array of integers and a number called n. The function
should calculate the maximum sum of n consecutive elements in the array */

//doesn't have to be sorted

// function maxSubArraySum(arr, num) {
//   //num is the number of consecutive digits
//   if (num > arr.length) {
//     return null;
//   }
//   //-Infinity is a good place to start in case we have negative numbers
//   let max = -Infinity;
//   //7 - 3 + 1 = 5

//   for (let i = 0; i < arr.length - num + 1; i++) {
//     console.log(`i: ${i}`);
//     temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   return max;
// }

// const time = performance.now();
// console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 3));
// console.log(`seconds: ${time / 1000}`);
//i = 0
//temp += 1 + 2 + 5 (arr[the sum of i + j]) === 8
//max = 8
//i = 1
//temp += 2 + 5 + 2 === 9
//max = 9
//i = 2
//temp += 5 + 2 + 8
//max = 15
//i = 3
// temp += 2 + 8 + 1 = 11
//max = 15
//i = 4
//temp += 8 + 1 + 5 = 14
//max = 15

//maxSum refactor with sliding window
//time complexity O(N), linear

function maxSubArray(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    //this is getting the sum of the first 3 digits in the array
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    //subtract 1st value in the list of 3 numbers and add the following number
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubArray([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
const time2 = performance.now();
console.log(`seconds: ${time2 / 1000}`);
