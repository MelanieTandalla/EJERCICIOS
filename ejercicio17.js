let acum = 0;
alert("Ejercico 17- Ingrese N notas para hacer un promedio");

let notas = Number(prompt("Ingrese la notas a promediar: "));

for (let a = 1; a <= notas ; a++) {
    let n = Number(prompt("Ingrese nota " + a));
    acum += n;
}


document.getElementById("1").innerHTML = "El promedio es: " + acum/notas;
