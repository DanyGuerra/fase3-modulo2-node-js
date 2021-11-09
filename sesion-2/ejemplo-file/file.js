const fs = require("fs");
const path = require("path");

// Ejemplo crear archivo sincrono

// const filePath = path.join(__dirname, "data.txt");

// fs.writeFileSync(filePath, "Hola mi primer archivo");

// fs.appendFileSync(
//   filePath,
//   "\nEsta es otra modificacion al contenido del archivo"
// );

// const content = fs.readFileSync(filePath, "utf-8");

// console.log(content);

//Ejemplo asincrono
const filePath = path.join(__dirname, "ejepmlo2.txt");

fs.writeFile(filePath, "Hola archivo de ejemplo", (err) => {
  if (err) {
    throw err;
  }
  fs.appendFile(filePath, "\nEsta es otra modificacion", (err) => {
    if (err) {
      throw err;
    }
    fs.readFile(filePath, "utf-8", (err, content) => {
      if (err) {
        throw err;
      }
      console.log(content);
    });
  });
});
