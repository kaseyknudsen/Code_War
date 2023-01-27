const charCount = (string) => {
  const myObject = {};
  for (let i of string) {
    i.toLowerCase();
    if (/[a-z0-9]/.test(i)) {
      myObject[i] > 0 ? myObject[i]++ : (myObject[i] = 1);
    }
  }
  return myObject;
};

console.log(charCount("hellooo hi ..##!~!"));
