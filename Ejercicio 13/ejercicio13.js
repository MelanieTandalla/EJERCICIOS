let A
let B
let C 

alert("EJERCICIO 13- NUMERO MAYOR");
A = Number(prompt("Ingrese el primer numero"));
B = Number(prompt("Ingrese el segundo numero"));
C = Number(prompt("Ingrese el tercer numero"));


    if (A>B & A>C) {
    alert("El numero mayor es: " + A);
    document.getElementById("1") = "El numero mayor es: " +A;
    }
        else {
            if (B>A & B>C) {
            alert("El numero mayor es: " + B);
            document.getElementById("1").innerHTML = "El numero mayor es: " +B;
            
         }
            else{
            alert("El numero mayor es: " + C);
            document.getElementById("1").innerHTML ="El numero mayor es: " + C;
        }

    }   
