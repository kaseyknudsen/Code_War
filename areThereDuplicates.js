/* Implement a function called, areThereDuplicates which accepts a variable number of 
arguments, and checks whether there are any duplicates among the arguments passed in.  
You can solve this using the frequency counter pattern OR the multiple 
pointers pattern. */

const areThereDuplicates = (...args) => {
  //create empty object
  const object1 = {};
  //loop through args and update properties of the object
  for (let element of args) {
    object1[element] = (object1[element] || 0) + 1;
  }
  //if any of the values are greater than one, return true, else return false
  for (let key in object1) {
    if (object1[key] > 1) {
      console.log("Yes, there are duplicates!");
      return true;
    }
  }
  console.log("No duplicates!");
  return false;
};

console.log(areThereDuplicates(1, 2, 3, 4));
