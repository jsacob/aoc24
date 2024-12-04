const fs = require("fs");
const { join } = require("path");

fs.readFile("F.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const lines = data.trim().split("\n");

  let a = [];
  let b = [];

  lines.forEach((line) => {
    const [left, right] = line.split(/\s+/).map(Number);
    a.push(left);
    b.push(right);
  });

  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    a.sort();
    b.sort();
    let abs = Math.abs(a[i] - b[i]);
    console.log(`a[${i}] = ${a[i]}  b[${i}] = ${b[i]}`);
    sum += abs;
  }

  console.log("Sum of absolute differences:", sum);

  let bCount = {};
  for (let num of b) {
    bCount[num] = (bCount[num] || 0) + 1;
  }

  let totalProduct = 0;
  let result = {};

  for (let num of a) {
    if (bCount[num] !== undefined) {
      result[num] = num * bCount[num];
      totalProduct += result[num];
    } else {
      result[num] = 0;
    }
  }

  
  
  console.log("Total Product:", totalProduct);

  console.log("Result object:", result);
});
