function saleHotdogs(n) {
  let price;
  return n < 5
    ? (price = n * 100)
    : n >= 5 && n < 10
    ? (price = n * 95)
    : (price = n * 90);
}

console.log(saleHotdogs(11));
