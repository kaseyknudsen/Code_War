function removeExclamationMarks(s) {
  let newArray = s.split("").filter((element) => element !== "!");
  return newArray.join("");
}

console.log(removeExclamationMarks("Hello World!"));
