const { log } = require("console");
const { readFile } = require("fs");

console.log("started a first task");
// CHECK FILE PATH!!!
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  log(result);
  log("completed first task");
});

log("starting next task");
