/* ej 8 switch
Abregú Mariela Victoria
*/

function mostrar()
{
	let destinoIngresado;
	let mensaje;

	destinoIngresado=document.getElementById("txtIdDestino").value;
	
	switch (destinoIngresado) {
		case "Bariloche":
		case "Ushuaia":
			mensaje="hace frio";
			break;
		case "Cataratas":
		case "Mar del plata":
			mensaje="hace calor";
			break;
	}
	alert(mensaje);
	
	/*
	var destinoIngresado =txtIdDestino.value;
	alert(destinoIngresado);
	*/

}//FIN DE LA FUNCIÓN