const fs = require("fs");
const { totalmem } = require("os");

fs.readFile("day3.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const p1 = data.trim();
  const doesWork = part2(p1);
  console.log(doesWork);
});

function part2(a) {
  const regex = /(mul\((\d+,\d+)\))|do\(\)|don't\(\)/g;
  let isValid = true;
  let newString = [];
  const matches = a.matchAll(regex);
  let totalSum = 0;
  for (const match of matches) {
    if (match[0] === "don't()") {
      isValid = false;
    } else if (match[0] === "do()") {
      isValid = true;
      newString.push();
    } else if (isValid && match[2]) {
      const nums = match[2].split(",").map((num) => parseInt(num.trim(), 10));
      const product = nums[0] * nums[1];
      totalSum += product;
    }
  }
  return totalSum;
}
