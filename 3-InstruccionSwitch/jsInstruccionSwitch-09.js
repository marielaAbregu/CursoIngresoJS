/*
Autor: Abregú Mariela.
Enunciado Switch 09.
*/

function mostrar()
{
	let estacion;
	let destino;
	let porcentaje;
	const PRECIO_INICIAL = 15000;
	let precioFinal;

	estacion=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;

	switch (estacion) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					porcentaje= 20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje= -10;
					break;
                case "Mar del plata":
					porcentaje= -20;
			        break;
			}
			break;
		case "Verano":
			switch (destino) {
				case "Bariloche":
					porcentaje= -20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje= 10;
					break;
                case "Mar del plata":
					porcentaje= 20;
			        break;	
			}
			break;
		case "Otoño":
		case "Primavera":
			switch (destino) {
				case "Bariloche":
					porcentaje= 10;
					break;
				case "Cataratas":
				case "Mar del plata":
					porcentaje= 10;
				case "Cordoba":
					porcentaje= 0;
					break;	
			}	
			break;
	}
    
	porcentaje = PRECIO_INICIAL*porcentaje/100;
	precioFinal = PRECIO_INICIAL+porcentaje;

	
	alert(`el precio final es: $ ${precioFinal}`);


}//FIN DE LA FUNCIÓN