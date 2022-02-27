/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/   
	function mostrar()
{
	let respuesta='s';
	let sumaAcumulada=0;
	let promedio;
	let numeroIngresado;
	let contador=0;


	do {
		numeroIngresado=parseInt(prompt("ingrese un número"));
		contador=contador+1;
		sumaAcumulada=sumaAcumulada+numeroIngresado;
		respuesta=prompt("desea ingresar otro número?");
	} while (respuesta=='s');



	/*while (respuesta=='s') {
		numeroIngresado=parseInt(prompt("ingrese un número"));
		contador=contador+1;
		sumaAcumulada=sumaAcumulada+numeroIngresado;
		respuesta=prompt("desea ingresar otro número?");

	}*/

	promedio=sumaAcumulada/contador;

	document.getElementById("txtIdSuma").value=sumaAcumulada;
	document.getElementById("txtIdPromedio").value=promedio;

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*var numeroIngresado;
	var contador=0;
	var promedio;
	var respuesta="si";
	var acumulador=0;

    while (respuesta=="si") {
		numeroIngresado=parseInt(prompt("ingrese un número: "));
        acumulador=acumulador+numeroIngresado;
		contador=contador+1;
		respuesta=prompt("¿quiere ingresar otro numero?");
		
	}
    
	promedio=acumulador/contador;

    document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;*/
}//FIN DE LA FUNCIÓN

