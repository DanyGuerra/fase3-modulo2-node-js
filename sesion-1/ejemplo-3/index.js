//Vanilla JS (node.js)
const os = require("os");
const fs = require("fs");

console.log(os.cpus().length); // Numero de nucleos
console.log(os.cpus()); //Array de los cpus que tiene la compu

fs.writeFileSync("hola.txt", "Este es un archivo");

//ES6
// import React from 'react'
