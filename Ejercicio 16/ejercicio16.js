let numero;
let x;
let sumaimpares;
let sumapares;

sumaimpares= 0
sumapares = 0

alert("EJERCICIO 16- Suma de N numeros impares y pares");
numero = Number(prompt("Ingrese un numero: "));

for (let x = 0; x <= numero ; x++) {
    if (x % 2 == 0) {
        sumapares = sumapares + 1;

    } else {
        sumaimpares = sumaimpares + 1;

    }

}
alert("Los numeros pares son: " + sumapares);
alert("Los numeros impares son: " + sumaimpares);

document.getElementById("1").innerHTML = "La suma de numeros pares: " + sumapares;
document.getElementById("2").innerHTML = "La suma de numeros impares: "+ sumaimpares;