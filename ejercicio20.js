alert("Ejercicio 20 -Determinar un palindromo");
let num = Number(prompt("Ingrese un numero de 3 cifras"));

D1= (num - (num % 100)) /100 ;
R1 = num % 100;
D2 =(R1 - (R1 %10)) /10;
D3 = R1 % 10;
num1 = ((D3*100)+(D2*10)+D1)
if (num1 == num1) {
    alert("El numero es palindromo");
    document.getElementById("1").innerHTML= "El numero es palindromo";
} else {
    alert("El numero no es palindromo");
    document.getElementById("1").innerHTML= "El numero no es palindromo";
}



