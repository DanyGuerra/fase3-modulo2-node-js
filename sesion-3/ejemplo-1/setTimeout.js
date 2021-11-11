//******Ejemplo 1
// console.log("Primera Linea");

// const cb = () => {
//   console.log("Callback 1");
// };

// const time = 2000;
// setTimeout(cb, time);

// console.log("Termine la ejecucion");

//****** Ejemplo 2
console.log("Primera Linea");

setTimeout(() => {
  console.log("Callback 1");
  setTimeout(() => {
    console.log("Callback 2");
  }, 500);
}, 1000);
console.log("Termine la ejecucion");
