const fs = require("fs");

let data = fs.readFileSync("day5.txt", "utf-8");

const sections = data.split("\n\n");

let rules = sections[0].trim().split("\n");
let updates = sections[1].split("\n"); // No need for .trim() here as it's already an array

const rules_objects = rules.map((rule) => {
  const [X, Y] = rule.split("|");
  return { [X.trim()]: Y.trim() };
});

const seen = [];

for (let i = 0; i < updates.length; i++) {
  console.log(updates[i]);
}
