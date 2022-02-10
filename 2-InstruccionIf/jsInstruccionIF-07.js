/*
Autor: Abregú Mariela.
Ejercicio 07 if:
*/

function mostrar()
{
	let edad;
	let mensaje="";
	let estadoCivil;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseFloat(edad);

	estadoCivil=document.getElementById("estadoCivil").value;

	if (edad <18 && estadoCivil !="Soltero") 
	{
        mensaje="es muy pequeño para no ser sltero";
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN