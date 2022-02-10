/*
Autor: Abregú Mariela.
Ejercicio 06 if:
*/

function mostrar()
{
	//tomo la edad  

	let edad;
	let mensaje="";

	edad=document.getElementById("txtIdEdad").value;
	edad=parseFloat(edad);

	if (edad <13) 
	{
        mensaje="es niño";
	}
	else
	{
		if(edad >=13 && edad<=17)
		{
            mensaje="es adolescente";
		}
		else
		{
			mensaje="es mayor";
		}

	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN