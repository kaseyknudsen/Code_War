const regex = /[aeiou]/g;
const myString = "Kasey is 44 and is getting cranky";
function countVowels(string) {
  let vowelArray = string.match(regex);
  return vowelArray.length;
}

console.log(countVowels(myString));
