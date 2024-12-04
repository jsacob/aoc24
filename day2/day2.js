const fs = require("fs");

fs.readFile("day02.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let number = data
    .trim()
    .split("\n")
    .map((line) => line.trim().split(/\s+/).map(Number));

  // accessnum(number);
  checkifVal(number);
});

function accessnum(line) {
  for (let i = 0; i < line.length; i++) {
    for (let j = 0; j < line[i].length; j++) {
      console.log(`LOCATION OF ELEMENTS [${i}, ${j}] ${line[i][j]}`);
    }
  }
}

//part 1
function checkifVal(lines) {
  let validlines = 0;

  for (let i = 0; i < lines.length; i++) {
    let isIncreasing = true;
    let isDecreasing = true;
    let isValid = true;

    for (let j = 0; j < lines[i].length - 1; j++) {
      let absval = Math.abs(lines[i][j] - lines[i][j + 1]);

      if (absval < 1 || absval > 3) {
        isValid = false;
        break;
      }
      if (lines[i][j] < lines[i][j + 1]) {
        isDecreasing = false;
      }
      if (lines[i][j] > lines[i][j + 1]) {
        isIncreasing = false;
      }
    }

    if (isValid && (isIncreasing || isDecreasing)) {
      validlines++;
    } else {
      if (checkRemoveal(lines[i])) {
        validlines++;
      }
    }
  }
  console.log(validlines);
}
//part 2
function checkRemoveal(report) {
  for (let i = 0; i < report.length; i++) {
    let modifiedReport = [...report.slice(0, i), ...report.slice(i + 1)];

    if (isIncreasingOrDecreasing(modifiedReport)) {
      return true;
    }
  }
  return false;
}

function isIncreasingOrDecreasing(report) {
  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 0; i < report.length - 1; i++) {
    let absVal = Math.abs(report[i] - report[i + 1]);

    if (absVal < 1 || absVal > 3) {
      return false;
    }

    if (report[i] < report[i + 1]) {
      isDecreasing = false;
    }
    if (report[i] > report[i + 1]) {
      isIncreasing = false;
    }
  }

  return isIncreasing || isDecreasing;
}
