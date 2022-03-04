let sueldo

alert("Ejercicio 14-Bonificacion de un trabajador");
nombre = prompt("Ingrese su nombre");
sueldo = Number(prompt("Ingrese su sueldo"));
categoria = prompt("Ingrse su categoria de A hasta D Mayusculas");

switch (categoria ) {
    case "A":
        resultado = sueldo * 0.10
        sueldototal = resultado + sueldo
        alert("Su bonificacion es de: " + resultado);
        alert("Su sueldo total es: " + sueldototal);
        document.getElementById("1").innerHTML = "Su bonificacion es de: " + resultado;
        document.getElementById("2").innerHTML = "Su sueldo total es: " + sueldototal;
        break;
        case "B":
        resultado = sueldo * 0.20
        sueldototal = resultado + sueldo
        alert("Su bonificacion es de: " + resultado);
        alert("Su sueldo total es: " + sueldototal);
        document.getElementById("1").innerHTML = "Su bonificacion es de: " + resultado;
        document.getElementById("2").innerHTML = "Su sueldo total es: " + sueldototal;
        break;
        case "C":
        resultado = sueldo * 0.30
        sueldototal = resultado + sueldo
        alert("Su bonificacion es de: " + resultado);
        alert("Su sueldo total es: " + sueldototal);
        document.getElementById("1").innerHTML = "Su bonificacion es de: " + resultado;
        document.getElementById("2").innerHTML = "Su sueldo total es: " + sueldototal;
        break;
        case "D":
        resultado = sueldo * 0.50
        sueldototal = resultado + sueldo
        alert("Su bonificacion es de: " + resultado);
        alert("Su sueldo total es: " + sueldototal);
        document.getElementById("1").innerHTML = "Su bonificacion es de: " + resultado;
        document.getElementById("2").innerHTML = "Su sueldo total es: " + sueldototal;
        break;

    default:
        alert("La categoria ingresada es incorrecta")
        document.getElementById("1").innerHTML ="La categoria ingresada es incorrecta"
        break;
}
