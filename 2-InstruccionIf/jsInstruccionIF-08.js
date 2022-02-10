/*
Autor: Abregú Mariela.
Ejercicio 08 if:
*/

function mostrar()
{
	let edad;
	let estadoCivil;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseFloat(edad);

	estadoCivil=document.getElementById("estadoCivil").value;


	if(!(edad<18)&& estadoCivil =="Soltero")
		{
			alert("es soltero y no es menor");
		}

}//FIN DE LA FUNCIÓN