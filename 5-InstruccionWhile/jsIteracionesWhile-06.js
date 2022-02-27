function mostrar()
{
	let sumaAcumulada=0;
	let promedio;
	let numero;
    let i=0;
	
	

	while (i<5) {
		numero=parseInt(prompt("ingrese un número"));
		sumaAcumulada=sumaAcumulada+numero;
		i++;
	}

	promedio=sumaAcumulada/5;

	document.getElementById("txtIdSuma").value=sumaAcumulada;
	document.getElementById("txtIdPromedio").value=promedio;
	
	
	
	
	
	/*var numeroIngresado;
	var contador=0;
	var acumulador=0;
	var promedio;
    
    while (contador <5) {
		numeroIngresado=parseInt(prompt("ingrese un número: "));
        acumulador=acumulador+numeroIngresado;
		contador=contador+1;
		
	}
    
	promedio=acumulador/contador;

    document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;*/
}//FIN DE LA FUNCIÓN