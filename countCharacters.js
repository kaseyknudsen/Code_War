const count = (string) => {
    const newObject = {}
    for (const letter of string) {
        newObject[letter] = (newObject[letter] || 0) + 1
    }
    return newObject
}

console.log(count(''))


