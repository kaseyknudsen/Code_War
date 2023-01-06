function consonantCount(str) {

    const regex = /[^aeiou\s\d\W]/gi
    const consonants = str.match(regex)
    return consonants !== null ? consonants.length : 0
  }

  console.log(consonantCount('012345_Cb'))


  /* another solution:
  const consonantCount = str => str.replace(/[^a-z]|[aeiou]/gi, '').length; */