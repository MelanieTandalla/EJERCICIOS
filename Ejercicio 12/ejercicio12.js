let radio

alert("ejercicio 12-Area y perimetro de un circulo");
radio = Number(prompt("ingrese el radio del perimetro"));

Number
perimetro = 2 * 3.14 * radio;
area = 3.14 * radio*radio;

alert("El perimetro de un circulo es: " + perimetro);
alert("El area de un circulo es: " + area);

document.getElementById("1").innerHTML = "El perimetro de un circulo es: " + perimetro;
document.getElementById("2").innerHTML = "El area del perimentro es: " + area;
