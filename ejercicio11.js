let aprobados
let desaprobados

alert("EJERCICIO 11- PORCENTAJE DE ALUMNOS APROBADOS");
aprobados = Number(prompt("Ingrese la cantidad de alumnos aprobados"));
desaprobados = Number(prompt("Ingrese la cantidad de alumnos desaprobados"));

Number
suma = aprobados + desaprobados;
porcentaje1 = aprobados * 100 / suma;
porcentaje2 = desaprobados * 100 / suma;
alert("El porcentaje de alumnos aprobados es: " + porcentaje1 + "%");
alert("El porcentaje de alumnos desaprobado es: " + porcentaje2  + "%");

document.getElementById("1").innerHTML = "El porcentaje de alumnos aprobados es: " + porcentaje1 + "%" ;
document.getElementById("2").innerHTML = "El porcentaje de alumnos desaprobado es: " + porcentaje2 + "%";

