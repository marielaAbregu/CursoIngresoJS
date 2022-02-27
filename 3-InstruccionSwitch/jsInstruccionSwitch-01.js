function mostrar()
{
	let mesDelAño;
	
	mesDelAño=document.getElementById("txtIdMes").value;

    switch (mesDelAño) {
		case "Enero":
			alert("que comiences bien el año!!!.");	
			break;
		case "Marzo":
			alert("a clases!!!.");
		    break;
		case "Julio":
			alert("se vienen las vacaciones!!!.");
		    break;
		case "Diciembre":
			alert("Felices fiesta!!!.");
		    break;
		default:
			alert("es solo otro mes!");
        break;
	}

}//FIN DE LA FUNCIÓN