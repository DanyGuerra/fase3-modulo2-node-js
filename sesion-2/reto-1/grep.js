// const fs = require("fs");
// const LINE = 10;
// const WHITESPACE = 32;
// const results = {
//   chars: 0,
//   lines: 0,
//   whitespace: 0,
// };

// fs.readFile("input.txt", "utf-8", (err, text) => {
//   if (err) {
//     throw err;
//   }

//   for (let i = 0; i < text.length; i++) {
//     const codigo = text.charCodeAt(i);
//     if (codigo === LINE) {
//       results.lines++;
//     } else if (codigo === WHITESPACE) {
//       results.whitespace++;
//     }
//   }

//   console.log("Numero de lineas: ", results.lines);
//   console.log("Espacios: ", results.whitespace);
//   console.log("Caracteres: ", text.length);
// });

const fs = require("fs");

const content = fs.readFileSync("./input.txt", "utf8");

const LINE = 10;
const WHITESPACE = 32;
const results = {
  lines: 0,
  whitespace: 0,
};

for (let i = 0; i < content.length; i++) {
  if (content.charCodeAt(i) == LINE) {
    results.lines++;
  } else if (content.charCodeAt(i) == WHITESPACE) {
    results.whitespace++;
  }
}

// split reduce

console.log("Número de caracteres:", content.length);
console.log("Número de espacios:", results.whitespace);
console.log("Número de líneas:", results.lines);
