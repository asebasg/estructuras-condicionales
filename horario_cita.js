/**
 * Crea un programa que determine el mejor horario para una cita según el día de la semana (1 a 7).
 * Usa switch para asignar un horario base: días 1-5 (laborales) a las 18:00, día 6 a las 10:00, día 7 a las 14:00.
 * Usa un bucle while para simular intentos de ajuste (máximo 3), sumando 1 hora si el usuario indica que el horario no es adecuado (simulado con una variable).
 * Muestra el horario final.
 */

let dia = 6;
let intento = 0;
let maxIntentos = 3;
let horario;

switch (dia) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    horario = 18;
    break;
  case 6:
    horario = 10;
    break;
  case 7:
    horario = 14;
    break;
  default:
    horario = 0;
}

console.log(`Horario base para día ${dia}: ${horario}:00`);

while (intento < maxIntentos) {
  let ajustar = intento < 2 ? true : false; // Simula que los primeros 2 intentos requieren ajuste
  // ajustar adopto el valor true
  if (!ajustar) break; // Verifica si ajustar es false
  intento++;
  horario++;
  console.log(`Intento ${intento}: Ajustando a ${horario}:00`);
}

console.log(`Horario final para la cita: ${horario}:00`);
// Salida:
// Horario base para día 6: 10:00
// Intento 1: Ajustando a 11:00
// Intento 2: Ajustando a 12:00
// Horario final para la cita: 12:00
