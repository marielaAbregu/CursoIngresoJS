/*
Autor: Abregú Mariela.
Enunciado Switch 07.
*/

function mostrar()
{
	let destino;
	let mensaje;

	destino=document.getElementById("txtIdDestino").value;

	switch (destino) {
		case "Bariloche":
			mensaje="oeste";
			break;
		case "Cataratas":
			mensaje="norte";
			break;
		case "Mar del plata":
			mensaje="este";
			break;
		case "Ushuaia":
			mensaje="sur";
			break;
	}
    alert(mensaje);

	
}//FIN DE LA FUNCIÓN