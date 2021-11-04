const random = require("./Random");

const array = [];

for (let i = 0; i < 20; i++) {
  array.push(random(-1000, 1000, 10));
}

console.log(array.sort((a, b) => a - b));
