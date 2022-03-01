let numero 
let cont
suma = 0

numero = Number(prompt("Ingrese el numero de veces que desea sumar"))


cont = 1
while (cont <= numero) {
    suma = suma + cont;
    cont = cont + 1;

}


alert("La suma de los numeros es: " + suma);
document.getElementById("l").innerHTML ="La suma de los numero es: " + suma;