let numero = 0;
let m=0;


alert("Ejercicio 18- Mayor de 10 numeros");

for ( b = 1; b <= 10 ; b++) {
    n = Number(prompt("Ingrese el numero" + b));
}
    if (n > m) {
        m += n;
}

alert("El numero mayor es: " + m);
document.getElementById("1").innerHTML = "El numero mayor ingresado es: " + m;

