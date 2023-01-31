/* given 2 strings, write a function to determine if the 2nd string is an anagram of the first. */
//no spaces

const isAnagram = (string1, string2) => {
  
  const stringObject1 = {};
  const stringObject2 = {};
  if (string1.length !== string2.length) {
    console.log("No, this sentence is not an anagram");
    return false;
  }
  for (let letter of string1) {
    letter = letter.toLowerCase();
    stringObject1[letter] = (stringObject1[letter] || 0) + 1;
  }
  for (let letter of string2) {
    letter = letter.toLowerCase();
    stringObject2[letter] = (stringObject2[letter] || 0) + 1;
  }
  console.log(stringObject1);
  console.log(stringObject2);
  
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
};

isAnagram("bob", "BoB");
