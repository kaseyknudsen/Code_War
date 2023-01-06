let myString = "the-stealth-warrior";
let anotherString = "The_Stealth_Warrior";
function toCamelCase(str) {
  //\w will match any character after a dash or underscore
  //ig performs a global, case insensitive search
  //this regex is capturing the dash or underscore followed by the character that appears after an underscore or a dash
  //the [1] is the index of the letter. [0] would be the dash or underscore
  const regex = /[_-]\w/gi;
  return str.replace(regex, (letterToChange) =>
    letterToChange[1].toUpperCase()
  );
}

console.log(toCamelCase(anotherString));
