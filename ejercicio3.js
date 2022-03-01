let nombre;
let numero1;
let numero2
let subtotal;
let Descuento;
let total;

alert("Ejercicio 3 - Descuento de un producto");
nombre = prompt("Ingrese el nombre del producto");
numero1 = Number(prompt("Ingrese el costo unitario"));
numero2 = Number(prompt("Ingrese las unidades a comprar"));

Number
subtotal = numero1 * numero1;
Descuento = subtotal * 0.1;
total = subtotal - Descuento;

document.getElementById("subtotal").innerHTML = "El subtotal es de: " + subtotal;
document.getElementById("descuento").innerHTML = "Su descuento es de: " + Descuento;
document.getElementById("num1").innerHTML = "El total de su factura es de: " + total;