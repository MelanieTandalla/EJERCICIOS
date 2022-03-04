let opcion

alert("Ejercicio 7 - Escoja el destino de su llamada");
alert("(1) - $0.15-EEUU");
alert("(2) - 0.14$ -Canada");
alert("(3) - 0.25$ -España");
alert("(4) - 0.05$ -Colombia");
alert("(5) - 0.10$ -Venezuela");
alert("(6) - 0.11$ -Mexico");
alert("(6) - 0.11$ -Mexico");


opcion =prompt("Ingrese la opcion de su destino");
duracion =prompt("Ingrese el tiempo de duracion");

switch (opcion) {
    case "1":
      resultado = 0.15 * duracion
        alert("El costo de su llamada es de: "+ resultado);
        document.getElementById("l").innerHTML ="El costo total de su llamada es: " + resultado ;
      break;
    case "2":
      resultado = 0.14 * duracion
        alert("El costo de su llamada es de: "+ resultado);
        document.getElementById("l").innerHTML ="El costo total de su llamada es: " + resultado ;
      break;
    case "3":
      resultado = 0.25 * duracion
        alert("El costo de su llamada es de: "+ resultado);
        document.getElementById("l").innerHTML ="El costo total de su llamada es: " + resultado ;
      break;
    case "4":
      resultado = 0.05 * duracion
        alert("El costo de su llamada es de: "+ resultado);
        document.getElementById("l").innerHTML ="El costo total de su llamada es: " + resultado ;
      break;
    case "5":
      resultado = 0.10 * duracion
        alert("El costo de su llamada es de: "+ resultado);
        document.getElementById("l").innerHTML ="El costo total de su llamada es: " + resultado ;
      break;
    case "6":
      resultado = 0.11 * duracion
      alert("El costo de su llamada es de: "+ resultado);
      document.getElementById("l").innerHTML ="El costo total de su llamada es: " + resultado ;
        break;
    case "7":
       resultado = 0.12 * duracion
        alert("El costo de su llamada es de: "+ resultado);
        document.getElementById("l").innerHTML ="El costo total de su llamada es: " + resultado ;
        break;
    default:
      alert("la opcion que ingreaste es incorrecta");
      document.getElementById("letra").innerHTML ="La opcion ingresada es incorrecta";
  }