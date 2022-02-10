/*
Autor: Abregú Mariela.
Ejercicio 02 if:
*/

function mostrar()
{
	//tomo la edad  

	let edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseFloat(edad);

	if (edad >=18) {
        alert("es mayor de edad");
	}
	

}//FIN DE LA FUNCIÓN