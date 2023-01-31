/* given 2 strings, write a function to determine if the 2nd string is an anagram of the first. */
//no spaces

//create function that takes in 2 strings
const isAnagram = (string1, string2) => {
  //create 2 empty objects
  const stringObject1 = {};
  const stringObject2 = {};
  //check if the strings are the same length. Return false if not. Otherwise...
  if (string1.length !== string2.length) {
    console.log("No, this sentence is not an anagram");
    return false;
  }
  //loop through the 1st string and update the properties of the 1st object
  for (let letter of string1) {
    letter = letter.toLowerCase();
    stringObject1[letter] = (stringObject1[letter] || 0) + 1;
  }
  //loop through the 2nd string and update the properties of the 2nd object
  for (let letter of string2) {
    letter = letter.toLowerCase();
    stringObject2[letter] = (stringObject2[letter] || 0) + 1;
  }
  console.log(stringObject1);
  console.log(stringObject2);
  //loop through each key in object1 to see if the key exists in object2. If not, return false. Otherwise...
  for (let key in stringObject1) {
    if (!key in stringObject2) {
      console.log("No, this sentence is not an anagram");
      return false;
    }
    if (stringObject1[key] !== stringObject2[key]) {
      console.log("No, this sentence is not an anagram");
      return false;
    }
  }
  console.log("Yes, this sentence is an anagram!");
  //loop through the values in object1 to see if the values in object2 are the same. If not, return false. Otherwise return true
  //console lof "yes, this is an anagram"
};

isAnagram("bob", "BoB");
