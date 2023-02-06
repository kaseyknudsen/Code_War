/* Write a function called averagePair. Given a sorted array of integers and a target 
average, determine if there is a pair of values in the array where the average of the 
pair equals the target average. There may be more than one pair that matches the 
average target.
 */

/* use multiple pointers */

const averagePair = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let average = (arr[left] + arr[right]) / 2;
    if (average === num) {
      return true;
    } else if (average < num) {
      left++;
    } else {
      right--;
    }
  }
  return false;
};

console.log(averagePair([1, 2, 3, 4, 5], 2.5));
