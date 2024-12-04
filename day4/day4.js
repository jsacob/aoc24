const fs = require("fs");

fs.readFile("day4.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let xmas = data.trim().split("\n");

  for (let i = 0; i < xmas.length; i++) {
    console.log(xmas[i]);
  }

  // Calculate total XMAS found
  console.log(xSearch(xmas) + ySearch(xmas) + diagonalSearch(xmas));
});

function xSearch(xmas) {
  let count = 0;
  for (let i = 0; i < xmas.length; i++) {
    for (let j = 0; j <= xmas[i].length - 4; j++) {
      if (
        xmas[i].substring(j, j + 4) === "XMAS" ||
        xmas[i].substring(j, j + 4) === "SAMX"
      ) {
        count++;
        console.log(`found XMAS going right or left at R:${i} C:${j}`);
      }
    }
  }
  return count;
}

function ySearch(xmas) {
  let count = 0;

  for (let i = 0; i < xmas[0].length; i++) {
    for (let j = 0; j <= xmas.length - 4; j++) {
      if (
        xmas[j][i] === "X" &&
        xmas[j + 1][i] === "M" &&
        xmas[j + 2][i] === "A" &&
        xmas[j + 3][i] === "S"
      ) {
        console.log(`found XMAS going down at ${j} ${i}`);
        count++;
      }
    }

    for (let j = xmas.length - 1; j >= 3; j--) {
      if (
        xmas[j][i] === "X" &&
        xmas[j - 1][i] === "M" &&
        xmas[j - 2][i] === "A" &&
        xmas[j - 3][i] === "S"
      ) {
        count++;
      }
    }
  }

  console.log("XMAS FOUND: U TO D and D TO U ", count);
  return count;
}

function diagonalSearch(xmas) {
  let count = 0;

  // T-L to B-R diagonal
  for (let i = 0; i <= xmas.length - 4; i++) {
    for (let j = 0; j <= xmas[i].length - 4; j++) {
      if (
        xmas[i][j] === "X" &&
        xmas[i + 1][j + 1] === "M" &&
        xmas[i + 2][j + 2] === "A" &&
        xmas[i + 3][j + 3] === "S"
      ) {
        count++;
      }
    }
  }

  // T-R to B-L diagonal
  for (let i = 0; i <= xmas.length - 4; i++) {
    for (let j = 3; j < xmas[i].length; j++) {
      if (
        xmas[i][j] === "X" &&
        xmas[i + 1][j - 1] === "M" &&
        xmas[i + 2][j - 2] === "A" &&
        xmas[i + 3][j - 3] === "S"
      ) {
        count++;
      }
    }
  }

  // B-L to T-R diagonal
  for (let i = xmas.length - 1; i >= 3; i--) {
    for (let j = 0; j <= xmas[i].length - 4; j++) {
      if (
        xmas[i][j] === "X" &&
        xmas[i - 1][j + 1] === "M" &&
        xmas[i - 2][j + 2] === "A" &&
        xmas[i - 3][j + 3] === "S"
      ) {
        count++;
      }
    }
  }

  // B-R to T-L diagonal
  for (let i = xmas.length - 1; i >= 3; i--) {
    for (let j = xmas[i].length - 1; j >= 3; j--) {
      if (
        xmas[i][j] === "X" &&
        xmas[i - 1][j - 1] === "M" &&
        xmas[i - 2][j - 2] === "A" &&
        xmas[i - 3][j - 3] === "S"
      ) {
        count++;
      }
    }
  }

  console.log("XMAS FOUND DIAGONALLY: ", count);
  return count;
}