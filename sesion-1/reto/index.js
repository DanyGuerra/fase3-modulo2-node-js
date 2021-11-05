const random = require("./Random");

const array = [];

for (let i = 0; i < 10; i++) {
  array.push(random(-10, 20, 0));
}

//************************************************Ordenar usando sort()
// function ordenarArray(a, b) {
//   return a - b;
// }

// array.sort(ordenarArray);

//***********************************************Ordenar bubble sort (ordenamiento burbuja)

const bubbleSort = (arr) => {
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    for (let j = 1; j < l - i; j++) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        debugger;
      }
    }
  }

  return arr;
};

//********************************Ordenamiento por canasta
// const bucketSort = (list) => {
//   let minValue = list[0];
//   let maxValue = list[0];

//   list.forEach((current) => {
//     current < minValue ? (minValue = current) : (maxValue = current);
//   });
// };

console.log(bubbleSort(array));
