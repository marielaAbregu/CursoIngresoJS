/*
Autor: Abregú Mariela.
Ejercicio 05 if:
*/

function mostrar()
{
	//tomo la edad  

	let edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseFloat(edad);

	if (!(edad >=13 && edad <=17)) {
        alert("no es adolescente");
	}

}//FIN DE LA FUNCIÓN