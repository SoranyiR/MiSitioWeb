console.log("validacion de fechas");
console.log("===Fecha y Hora GMT===");
//greenwich mean time//

let timeGMT = new Date();
console.log(timeGMT);
console.log("==Fecha y Hora en String==")
let timeGMTStr = timeGMT.toString();
console.log(timeGMTStr);
console.log("==obtener el dia de la semana==");
let timeGMTDay = timeGMT.getDay();
console.log(timeGMTDay);
let diaSemana = ["Domingo", "lunes", "martes", "miercoles",
                 "jueves", "viernes", "sabado"];
console.log("hoy es: " + diaSemana[timeGMTDay]);

console.log("==obtener mes de la semana==");
let timeGMTMont = timeGMT.getMonth();
console.log(timeGMTMont);
let mesActual = ["enero", "febrero", "marzo", "abril",
                 "mayo", "junio", "julio",
            "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
console.log("mes Actual: " + mesActual[timeGMTMont]);
console.log("fecha y hora desfrangmentada");

let currentTime = new Date();
console.log("dia de la semana: " + currentTime.getDay());
console.log("mes del año: " + currentTime.getMonth());
console.log("dia del mes: " + currentTime.getDate());
console.log("año:" + currentTime.getFullYear());
console.log("hora: " + currentTime.getHours());
console.log("minutos: " + currentTime.getMinutes());
console.log("segundos: " + currentTime.getSeconds());
console.log("milisegundos: " + currentTime.getMilliseconds());

console.log("==milisegundos transcurridos desde 01/01/1970==");
console.log(currentTime.getTime());

console.log("estableciendo diferencia en fechas");
let newYear2024 = new Date("January 1, 2024");
let FechaActual = new Date();
let newYear2024ms = newYear2024.getTime();
let FechaActualms = FechaActual.getTime();

let milisecDiff = newYear2024ms - FechaActualms;
let DiasDiff = milisecDiff / (1000 * 60 * 60 * 24);
console.log("dias faltantes para año nuevo: " + Math.floor(DiasDiff));


// console.log("segundos faltantes: " + fechaDifvot / 1000);
// console.log("minutos faltante: " + fechaDifvot / (1000 * 60));
// console.log("Horas faltante: " + fechaDifvot / (1000 * 60 * 60));
// console.log("Dias faltante: " + fechaDifvot / (1000 * 60 * 60 * 24));
calcularTiempoVotaciones();

function calcularTiempoVotaciones(){
    console.log("ingresar fecha y hora");
    let fechaHora = new Date("July 2, 2023 08:00:00");
    let fechaHorams = fechaHora.getTime();
    let fechaDifvot = fechaHorams - FechaActualms;
    let diasRestantes = Math.floor(fechaDifvot / (1000 * 60 * 60 * 24));
    let horasRestantes = Math.floor(fechaDifvot / (1000 * 60 * 60));
    let horasRestantesSinDecim = Math.floor(horasRestantes % 24);
    let minutosRestantes = fechaDifvot / (1000 * 60);
    let minutosRestantesSinD = Math.floor(minutosRestantes % 60);
    console.log("El tiempo restante para las votaciones es: " +
    diasRestantes + " Dias, " + horasRestantesSinDecim + "Horas y " + minutosRestantesSinD + "Minutos");
}



