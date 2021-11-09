const numberA = parseFloat(process.argv[2]);
const numberB = parseFloat(process.argv[3]);

if (isNaN(numberA) || isNaN(numberB)) {
  process.exit(1);
} else {
  console.log(
    ` Programado por 😎${process.env.NOMBRE}😎 \n ${numberA} + ${numberB} = ${
      numberA + numberB
    }`
  );
}
