	// Elaborar un programa que ingrese 3 números y muestre el número intermedio.
	let a = new Number();
	let b = new Number();
	let c = new Number();
	a = Number(prompt("Ingrese el primer numero"));
	document.write("El primer numero es: " + a +'<BR/>');

	b = Number(prompt("Ingrese el segundo número"));
	document.write("El segundo número es: " + b +'<BR/>');
    
	c = Number(prompt("Ingrese el tercer número"));
	document.write("El tercer número es: " + c +'<BR/>');

	if ((a!=b && a!=c && b!=c)) {
		if ((a>b && a<c || a>c && a<b)) {
			document.write("1. El numero intermedio es : "+ a +'<BR/>');
		} else {
			if ((b>a && b<c || b<a && b>c)) {
				document.write("2. El número intermedio es : " +b + "<BR/>");
			} else {
				document.write("3. El número intermedio es: " +c+'<BR/>');
			}
		}
	} else {
		document.write("Los números no son diferentes",'<BR/>');
	
}