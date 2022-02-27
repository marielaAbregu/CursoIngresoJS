/*
Autor: Abregú Mariela.
Enunciado Switch 06.
*/

function mostrar()
{
	var horaDelDia ;
	let mensaje;
	
	horaDelDia=document.getElementById("txtIdHora").value;
	horaDelDia=parseInt(horaDelDia);

	switch (horaDelDia) {
		case 7:
	    case 8:
		case 9:
		case 10:
	    case 11:
			mensaje="Es de mañana.";
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			mensaje="Es de tarde.";
			break;
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 00:
		case 01:
		case 02:
		case 03:
		case 04:
		case 05:
		case 06:
			mensaje="Es de noche.";
			break;
		default:
			mensaje="La hora no existe.";
			break;
	}

	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN