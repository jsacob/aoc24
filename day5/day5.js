const fs = require("fs");

let data = fs.readFileSync("day5.txt", "utf-8").trim().split("\n");

let firstSection = [];
let secondSection = [];

for (let line of data) {
  if (line.includes("|")) {
    firstSection.push(line.split("|").map((item) => item.trim()));
  } else if (line.includes(",")) {
    secondSection.push(line.split(",").map((item) => item.trim()));
  }
}

console.log("First Section:", firstSection);
console.log("Second Section:", secondSection);

extractXnY(firstSection);
dataset(secondSection);

function extractXnY(a) {
  let results = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i].length === 2) {
      let x = a[i][0];
      let y = a[i][1];
      results.push({ X: x, Y: y });
    }
  }
  let tonums = results.map((item) => ({
    X: Number(item.X),
    Y: Number(item.Y),
  }));
  return tonums;
  // console.log("Extracted X and Y:", tonums);
}

function dataset(a) {
  const valid_working = [];
  for (let numbers of a) {
    const valid = numbers.map(Number);
    valid_working.push(valid);
  }
  return valid_working;
}

function checkRule(a) {
  const data = dataset(a);
  const checkData = extractXnY(a);

  for (let i = 0; i < data.length; i++) {
    let isTrue = true;
    for (let j = 0; j < data[i].length; j++) {
      if (data[i][j] === 75) {
        console.log("Here is the index of all of the 13:", i, j);
      }
      for (let k = 0; k < checkData.length; k++) {
        const { X, Y } = checkData[k];
        if (data[i][j] === X || data[i][j] === Y) {
        }
      }
    }
  }
  console.log("Dataset Now in CheckRule", data);
}

checkRule(secondSection);
checkRule(firstSection);
