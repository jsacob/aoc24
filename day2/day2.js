const fs = require("fs");
const { join } = require("path");
const { emitKeypressEvents } = require("readline");

fs.readFile("day2.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const lines = data.trim(" ").split("\n");
  for (let i = 0; i < lines.length; i++) {
    // console.log(`line[${i}] = ${lines[i]}`);
  }

  let numbers = [];
  lines.forEach((line) => {
    const nums = line.split(/\s+/).map(Number);
    numbers.push(nums);
  });

  // numbers.forEach((nums) => {
  //   console.log(nums.join(" "));
  //   console.log();
  // });

  let validLines = 0;

  for (let i = 0; i < numbers.length; i++) {
    let lineIsValid = true;
    let direction = null;

    for (let j = 0; j < numbers[i].length - 1; j++) {
      if (numbers[i][j] === 0 || numbers[i][j + 1] === 0) {
        continue;
      }

      let absDiff = Math.abs(numbers[i][j] - numbers[i][j + 1]);

      if (absDiff < 1 || absDiff > 3) {
        lineIsValid = false;
        break;
      }

      if (numbers[i][j] < numbers[i][j + 1]) {
        if (direction === null) direction = "increasing";
        else if (direction !== "increasing") {
          lineIsValid = false;
          break;
        }
      } else if (numbers[i][j] > numbers[i][j + 1]) {
        if (direction === null) direction = "decreasing";
        else if (direction !== "decreasing") {
          lineIsValid = false;
          break;
        }
      }
    }

    if (lineIsValid) {
      validLines++;
    }
    console.log(`line[${i}] = ${numbers[i]}, valid: ${lineIsValid}`);
  }

  console.log(validLines);
});
