const https = require("https");
const fs = require("fs");

function descargarImagen(url, localPath) {
  let file = fs.createWriteStream(localPath);
  https.get(url, function (response) {
    response.pipe(file);
  });
}

function getAPOD() {
  https
    .get("https://celulapp.herokuapp.com/v1/celulares", (resp) => {
      let data = "";

      resp.setEncoding("utf8");
      resp.on("data", (chunk) => {
        data += chunk;
      });

      resp.on("end", () => {
        let body = JSON.parse(data);
        let celular = body[30];
        let urlImage = celular.images[0];
        console.log("Celular de CELULAPP: ");
        console.log(celular);

        console.log("Link de la imagen a guardar: ");
        console.log(urlImage);
        descargarImagen(
          urlImage,
          `${celular.marca}-${celular.modelo}-${celular._id}.jpg`
        );
      });
    })
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
}

getAPOD();
