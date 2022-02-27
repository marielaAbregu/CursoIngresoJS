/*ej 10 switch
Abregú Mariela Victoria*/

function mostrar()
{
	let estacion;
	let destino;
	let mensaje;

	estacion=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;

	switch (estacion) {
		case "Invierno":
            switch (destino) {
				case "Bariloche":
					mensaje="se viaja";
			        break;
				default:
					mensaje="no se viaja";
			    break;
			}
		break;
		case "Verano":
			switch (destino) {
				case "Cataratas":
				case "Mar del plata":
					mensaje="se viaja";		
					break;
				default:
					mensaje="no se viaja";
					break;	
			}
		break;
		case "Otoño":
			switch (destino) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
					mensaje="se viaja";
					break;
				default:
					mensaje="no se viaja";
					break;
			}
		break;
		case "Primavera":
			switch (destino) {
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
					mensaje="se viaja";
					break;
				default:
					mensaje="no se viaja";
					break;	
			}
	}

	alert(mensaje);
	
	/*
	var estacionIngresada =txtIdEstacion.value;
	alert(estacionIngresada);
	*/

}//FIN DE LA FUNCIÓN