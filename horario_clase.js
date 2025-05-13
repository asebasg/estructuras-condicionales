/**
 * Crea un programa que asigne un horario para una clase según el día de la semana (1 a 7).
 * Usa switch para asignar un horario base: días 1-5 (laborales) a las 9:00, día 6 a las 11:00, día 7 a las 16:00.
 * Usa un bucle while para simular intentos de ajuste (máximo 4), restando 1 hora si el horario no es adecuado (simulado con una variable).
 * Si el horario ajustado es menor a 7:00, muestra un mensaje de error. Muestra el horario final.
 */

let dia = 5;
let horario;
let intetosMax = 4;
let intento = 0;

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
    case 7:
        horario = 16;
    default:
        horario = 0;
        console.log("No has seleccionado un numero valido");
}

console.log(`El dia seleccionado fue ${dia}, con el horario base de ${horario}:00`);

while (intento < 4) {
    let ajuste = intento < 3 ? true : false; // Booleanos para verificar si el intento es menor a 3 (true)
    if (!ajuste) break; // Rompe cuando ajuste arroja false
    horario -= 1;
    intento++;
    console.log(`Intengo #${intento}. Nuevo horario de clase: ${horario}:00`);
}

console.log(`El nuevo horario de clase es ${horario}:00`);