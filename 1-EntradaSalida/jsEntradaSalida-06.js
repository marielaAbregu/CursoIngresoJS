/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let primerNumero;
	let segundoNumero;
	let resultado;

	primerNumero=document.getElementById("txtIdNumeroUno").value;
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById("txtIdNumeroDos").value;
	segundoNumero=parseInt(segundoNumero);

	resultado=primerNumero+segundoNumero;
	
	alert("la suma es: "+resultado);
}

