let numero1;
let numero2;
let resultado1;
let resultado2;

alert("Ejercicio 4 - Calcular Area y perimetro");
numero1 =Number(prompt("Ingrese la base de un rectangulo"));
numero2 = Number(prompt("Ingrese la altura de una rectangulo"));


Number
resultado1 = numero1 * numero2;
resultado2 = (2 * numero1) + (2 * numero2);


document.getElementById("area").innerHTML = "El area de una rectangulo es: " + resultado1;
document.getElementById("perimetro").innerHTML =" El perimetro de un rectangulo es: " + resultado2;