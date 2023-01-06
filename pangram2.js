function isPangram(string) {
  const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

  const stringArray = string.toLocaleLowerCase().split("");

  const notPangramArray = alphabetArray.filter((letter) => {
    if (!stringArray.includes(letter)) {
      return letter;
    }
  });
  console.log(notPangramArray);
  return notPangramArray.length > 0 ? false : true;
}

console.log(isPangram("Crazy Fredrick bought many very exquisite opal jewels"));
