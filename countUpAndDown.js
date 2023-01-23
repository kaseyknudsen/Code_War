const countUpAndDown = (num) => {
  console.log("Going up!");
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
  console.log("Going down!");
  for (let j = num; j >= 0; j--) {
    console.log(j);
  }
};
 countUpAndDown(10)