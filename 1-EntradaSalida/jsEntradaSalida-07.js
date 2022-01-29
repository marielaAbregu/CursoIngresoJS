/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    let primerNumero;
	let segundoNumero;
	let resultado;

	primerNumero=document.getElementById("txtIdNumeroUno").value;
	segundoNumero=document.getElementById("txtIdNumeroDos").value;
	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	resultado=primerNumero+segundoNumero;

	alert("la suma es: "+resultado);	
}

function restar()
{
	let primerNumero;
	let segundoNumero;
	let resultado;

	primerNumero=document.getElementById("txtIdNumeroUno").value;
	segundoNumero=document.getElementById("txtIdNumeroDos").value;
	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	resultado=primerNumero-segundoNumero;

	alert("la resta es: "+resultado);	
}

function multiplicar()
{ 
	let primerNumero;
	let segundoNumero;
	let resultado;

	primerNumero=document.getElementById("txtIdNumeroUno").value;
	segundoNumero=document.getElementById("txtIdNumeroDos").value;
	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	resultado=primerNumero*segundoNumero;

	alert("el producto es: "+resultado);	
}

function dividir()
{
	let primerNumero;
	let segundoNumero;
	let resultado;

	primerNumero=document.getElementById("txtIdNumeroUno").value;
	segundoNumero=document.getElementById("txtIdNumeroDos").value;
	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	resultado=primerNumero/segundoNumero;

	alert("el cociente es: "+resultado);	
}

