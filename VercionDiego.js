
let dia = parseInt(prompt("ingrese el dia de la semana"));
let horario;
let intento = 0;
let maxIntentos = 4;

switch (dia) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    horario = 9;
    break;
  case 6:
    horario = 11;
    break;
  case 7:
    horario = 16;
    break;
  default:
    horario = 0;
}

console.log(`Horario base para día ${dia}: ${horario}:00`);

while (intento < maxIntentos) {
  let ajustar = intento < 3 ? true : false; 

  if (!ajustar) break;

  intento++;
  horario--;
  console.log(`Intento ${intento}: Ajustando a ${horario}:00`);
}

if (horario < 7) {
  console.log("Error: Horario demasiado temprano");
} else {
  console.log(`Horario final para la clase: ${horario}:00`);
}
