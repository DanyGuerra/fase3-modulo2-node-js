const fetch = require("node-fetch");
const fs = require("fs");

const byFilms = (a, b) => a.films.length - b.films.length;
const byName = (a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
};
const saveJSON = (name, data) => {
  fs.writeFile(name, data, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

fetch("https://swapi.dev/api/people/")
  .then((response) => response.json())
  .then(({ results }) => {
    console.log("Ordenado por pelicula: ");
    console.log(results.sort(byFilms));
    saveJSON("by-film.json", JSON.stringify(results, null, 4));
    console.log("Ordenado por nombre: ");
    console.log(results.sort(byName));
    saveJSON("by-name.json", JSON.stringify(results, null, 4));
  });
