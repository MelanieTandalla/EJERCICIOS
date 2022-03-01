let cont;
let numeros;
let pares;

let impares;

impares = 0;
pares = 0; 

alert("EJERCICIO 15- Numeros pares e impares");

for (let cont = 1; cont <= 10; cont++) {
    numeros = Number(prompt("Ingrese los numeros " + cont ));
   if(numeros % 2 == 0){
   pares = pares + 1

}else{
    impares = impares + 1
    
}
}

alert("El numero de pares son: " + pares);
alert("El numero de impares es: " + impares);
document.getElementById("1").innerHTML ="El numero de pares son: " + pares;
document.getElementById("2").innerHTML = "El numero de impares es: " + impares;
