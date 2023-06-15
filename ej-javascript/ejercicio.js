"use strict"

/*Ejercicio N.1*/
/*El siguiente codigo se ejecuta una vez se cargue el documento html*/
alert("bienvenidos al mundo e javascript...)");

/* EjercicioN.2 use strict no permite utilizar variables 
que no hayan sido declaradas..*/
let nombreAprendiz = "juan carlos";
alert(nombreAprendiz);

/* Ejercicio N.3 */
/*crear 2 variables de tipo string (Nombres y Apellidos)
y las mostramos en la consola...*/
let nombresAprendiz = "Soranyi";
let apellidosAprendiz = "Ibata Rodriguez";
console.log("EjercicioN.3")
console.log(nombresAprendiz + " " + apellidosAprendiz);

/*Ejercicio N.4*/

let num1Int = 5;
let num2Int = 3;
let num3Str = "4";
let num4Str = "8";


console.log();
console.log("Ejercicio N.4"); 
console.log("Entero + Entero (5+3)");
console.log(num1Int + num2Int);
console.log("String + String (\"4\" + \"8\")");
console.log(num3Str + num4Str);
console.log("Entero + Entero (5+\"4\")");
console.log(num1Int + num3Str);


/*Ejercicio N.5 */
/*de String a entero */
console.log("conversion explicita de variables");
console.log("convertir String a Entero");
let num3Int = parseInt(num3Str);
let resultadoInt = num1Int + num2Int;
console.log(resultadoInt);


/*de Entero a String */
console.log("conversion explicita de entero a string");
let num1str = num1Int.toString();
let resultadoStr = num3Str + num1str;
console.log(resultadoStr);

/* De entero y String a Decimal */
let num1Float = parseFloat(num1Int);
let num3Float = parseFloat(num3Str);
let num5Float = 5.3;
console.log("valores: " + num1Float + " + " + num3Float + num5Float);
console.log("Resultado: " + (num1Float + num3Float + num5Float));

/* De Decimal a entero */
let num6Int = Math.floor(num5Float);
console.log("conversion de decimal(5.3) a Entero con ajuste hacia el techo:" + num6Int);
/* Limitaciones para declaracion de variables*/
/*1. No iniciar variables con numeros*/
let 1nombre = "vicente";
let nombre1 = "thalia"

/*Los nombres de variables no llevan espacios*/
let nombre Aprendiz = "Margarita";

/* La declaracion de la variable no lleva comillas ni caracteres especiales de tipo -,/*/
let "apellidos" = "sanchez";
let nombre-apellidos = "Fernando Rojas";
let primer/nombre = "saul";

/* no podemos declarar variables con nombres restringidos...*/
let for = 5;
let switch = "Deporte";
let while = 12.5; 