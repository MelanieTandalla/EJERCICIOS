let numero1;
let numero2;
let numero3;


alert("Ejercicio 5 - Calcular El promedio");
numero1 =Number(prompt("Ingrese la primera nota"));
numero2 = Number(prompt("Ingrese la segunda nota"));
numero3 = Number(prompt("Ingrese la tercera nota"));


Number
resultado = numero1 + numero2 + numero3 / 3

document.getElementById("perimetro").innerHTML ="Su nota promedio es: " + resultado, "APROBADO";
document.getElementById("perimetro1").innerHTML ="Su nota promedio es" + resultado, "REPROBADO";

if(promedio >= 6.5){
    alert("El promedio es "+promedio+" APROBADO");
}else{
    alert("El promedio es "+promedio+" DESAPROBADO");
}