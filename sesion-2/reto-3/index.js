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
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", (resp) => {
      let data = "";

      resp.setEncoding("utf8");
      resp.on("data", (chunk) => {
        data += chunk;
      });

      resp.on("end", () => {
        let body = JSON.parse(data);
        console.log(" Título:", body.explanation);
        console.log("\n Explicación", body.explanation);
        console.log("\n URL:", body.url);
        descargarImagen(body.url, "./FotoNasaAPI.jpg");
      });
    })
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
}

getAPOD();
