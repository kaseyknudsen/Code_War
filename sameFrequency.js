/* frequency counter
Given 2 positive integers, find out if the 2 numbers have the same
frequency of digits

solution must have O(N) time complexity
*/

const sameFrequency = (num1, num2) => {
  //create 2 empty objects
  const object1 = {};
  const object2 = {};

  //convert numbers to String
  const num1toString = String(num1);
  const num2toString = String(num2);

  //check if length of numbers are the same
  if (num1toString.length !== num2toString.length) {
    return false;
  }
  //loop through each number and update the property values of the objects,
  for (let num of num1toString) {
    object1[num] = (object1[num] || 0) + 1;
  }
  for (let num of num2toString) {
    object2[num] = (object2[num] || 0) + 1;
  }
  //check if keys in object 1 are in object 2
  for (let key in object1) {
    if (!key in object2) {
      console.log("test failed");
      return false;
    }
    //check if the values in object 1 are the same as values in object 2
    if (object1[key] !== object2[key]) {
      console.log("values are different");
      return false;
    }
  }
  console.log("numbers have the same frequency");
  return true;
};

console.log(sameFrequency(124432, 443212));
