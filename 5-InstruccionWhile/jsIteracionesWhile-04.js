/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	/*numeroIngresado = prompt("ingrese un número entre 0 y 10.");
    numeroIngresado=parseInt(numeroIngresado);*/
	
	do {
		numeroIngresado = prompt("ingrese un número entre 0 y 10.");
		numeroIngresado=parseInt(numeroIngresado);
	} while(numeroIngresado <0 || numeroIngresado>9);
    
	/*while (numeroIngresado <0 || numeroIngresado>9) {
		numeroIngresado = prompt("ingrese un número entre 0 y 10.");
		numeroIngresado=parseInt(numeroIngresado);
	}*/

    document.getElementById(txtIdNumero).value=numeroIngresado;



}//FIN DE LA FUNCIÓN