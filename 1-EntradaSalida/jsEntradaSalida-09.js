/*
Autor: Abregú Mariela.
Enunciado Ejercicio 09:

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    let sueldo;
	let aumento;
	let sueldoConAumento;

	sueldo=document.getElementById("txtIdSueldo").value;
	sueldo=parseFloat(sueldo);

	aumento=sueldo*10/100;

	sueldoConAumento=sueldo+aumento;

	document.getElementById("txtIdResultado").value=sueldoConAumento;
}
