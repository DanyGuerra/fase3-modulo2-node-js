console.log("Id del proceso:", process.pid);
process.stdin.setRawMode(true);
process.stdin.resume();
console.log("Presiona cualquier caracter");
process.stdin.on("data", process.exit.bind(process, 0));
