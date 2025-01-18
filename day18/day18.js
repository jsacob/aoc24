const fs = require("fs");

let data = fs
  .readFileSync("day18.txt", "utf-8")
  .trim()
  .split("\n")
  .map((row) => row.split(",").map(Number));

const rows = 7;
const cols = 7;
const Arr2D = new Array(rows).fill().map(() => new Array(cols).fill(0));
// console.log(Arr2D);

data.forEach(([x, y]) => {
  if (x >= 0 && x < cols && y >= 0 && y < rows) {
    Arr2D[y][x] = 1;
  }
});

console.log(Arr2D);
