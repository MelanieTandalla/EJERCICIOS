    let x = new Number();
	let contador = new Number();
	let suma = new Number();
	let n = new Number();
	
	n = Number(prompt("Desde que número desea sumar"));
	x = 0;
	contador = 0;
	for (x=n;x<=n;x++) {
        document.write("El número inicial es: " + n + "<br>");
		while (contador<=n) {
			if (x%2==0) {
				document.write(x,'<BR/>');
				suma = suma+x;
				contador = contador+1;
			}
			x = x+1;
		}
	}
	document.write("La suma de los primeros números pares es: ",suma,'<BR/>');


