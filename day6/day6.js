const fs = require("fs");

const data = fs.readFileSync("day6.txt", "utf-8");

const input = data.trim().split("\n");

console.log(input);
console.log(findguard(input));

function findguard(a) {
  let guard = "^";
  for (let x = 0; x < a.length; x++) {
    for (let y = 0; y < a[x].length; y++) {
      if (a[x][y] === guard) {
        return { x, y };
      }
    }
  }
  return null;
}
