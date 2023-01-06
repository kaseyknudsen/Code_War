const humanYearsCatYearsDogYears = (humanYears) => {
  let agesArray = [humanYears];
  let catAge = 0;
  let dogAge = 0;
  if (humanYears === 1) {
    catAge += 15;
    dogAge += 15;
  } else if (humanYears === 2) {
    catAge += 24
    dogAge += 24
  } else {
    catAge += (humanYears - 2) * 4 + 24
    dogAge += (humanYears - 2) * 5 + 24
  }
  agesArray.push(catAge, dogAge);
  return agesArray;
};

console.log(humanYearsCatYearsDogYears(6));
