const RomanNumerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function getRoman(num) {
  let str = "";
  for (const property in RomanNumerals) {
    let divideNum = Math.floor(num / RomanNumerals[property]);
    str += property.repeat(divideNum);
    num = num % RomanNumerals[property];
  }
  return str;
}
console.log(getRoman("1990"));
