/* Your goal in this kata is to implement a difference function, 
which subtracts one list from another and returns the result. */

/* arrayDiff([1,2],[1]) == [2]
arrayDiff([1,2,2,2,3],[2]) == [1,3]
 */

function arrayDiff(a, b) {
  return a.filter((num) => !b.includes(num))
}


