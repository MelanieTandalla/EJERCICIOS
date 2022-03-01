let nombre;
let numero1;
let numero2
let resultado;

alert("Ejercicio 2 - Sueldo de un trabajador");
nombre = prompt("Ingrese el nombre del trabajador");
numero1 = Number(prompt("Ingrese las horas trabajadas en el mes"));
numero2 = Number(prompt("Ingrese cuando gana por hora"));
Number
resultado = numero1 * numero2;

document.getElementById("nombre").innerHTML = "El trabajador " + nombre;
document.getElementById("num1").innerHTML = "Debe recibir una remunenracion de: " + resultado;