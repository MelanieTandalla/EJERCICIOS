let Nombre
let Nota

alert("Ejercicio 8 - Nota de alumno");
alert("Ingrese el nombre del estudiante");
nombre = (prompt("Ingrese el nombre del alumno"));
alert("Ingrese la nota del estudiante");
nota = Number(prompt("Ingrese la nota del alumno"));

if ( nota>=0 & nota<=2) {
    alert("El estudiante " + nombre + " Necesita Reforzamiento")
    document.getElementById("l").innerHTML ="El alumno " + nombre + " Necesita Reforzamiento";
 } else {
    if ( nota>=3 & nota<=4) {
        alert("El estudiante " + nombre + " Esta desaprobado")
        document.getElementById("l").innerHTML ="El alumno " + nombre + " Esta aprobado";
     } else {
        if ( nota>=5 & nota<=7) {
            alert("El estudiante " + nombre + " Esta aprobado")
            document.getElementById("l").innerHTML ="El alumno " + nombre + " esta aprobado";
         } else {
            if ( nota>=8 & nota<=10) {
                alert("El estudiante " + nombre + " Tiene un promedio excelente")
                document.getElementById("l").innerHTML ="El alumno " + nombre + "  tiene un promedio excelente";
             } else {
                if ( nota=10) {
                    alert("El estudiante " + nombre + " Tiene una beca")
                    document.getElementById("l").innerHTML ="El alumno " + nombre + " tiene una beca";
                 } else {
                    alert("La nota es incorrecta")
                 }
             }
         }
     }
 }