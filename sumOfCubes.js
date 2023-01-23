function sumCubes(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += Math.pow(i, 3);
  }
  return sum;
}

console.log(sumCubes(3));

