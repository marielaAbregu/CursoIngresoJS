/*1.	
Autor: Abregú Mariela.
Enunciado Ejercicio TP 01:

Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioUno;
    let precioDos;
    let precioTres;

    let precioSuma;

    precioUno=document.getElementById("txtIdPrecioUno").value;
    precioDos=document.getElementById("txtIdPrecioDos").value;
    precioTres=document.getElementById("txtIdPrecioTres").value;

    precioUno=parseFloat(precioUno);
    precioDos=parseFloat(precioDos);
    precioTres=parseFloat(precioTres);

    precioSuma=precioUno+precioDos+precioTres;

    alert(`la suma total de los precios ingresados es: ${precioSuma}`);
    
    
}


function Promedio () 
{
	let precioUno;
    let precioDos;
    let precioTres;

    let promedio;

    precioUno=document.getElementById("txtIdPrecioUno").value;
    precioDos=document.getElementById("txtIdPrecioDos").value;
    precioTres=document.getElementById("txtIdPrecioTres").value;

    precioUno=parseFloat(precioUno);
    precioDos=parseFloat(precioDos);
    precioTres=parseFloat(precioTres);

    promedio=(precioUno+precioDos+precioTres)/3;

    alert(`el promedio es: ${promedio.toFixed(2)}`);
}


function PrecioFinal () 
{
	let precioProductoUno;
    let precioProductoDos;
    let precioProductoTres;


    let precioSuma;
    let iva;

    let preciofinalConIva;

    precioProductoUno=document.getElementById("txtIdPrecioUno").value;
    precioProductoDos=document.getElementById("txtIdPrecioDos").value;
    precioProductoTres=document.getElementById("txtIdPrecioTres").value;

    precioProductoUno=parseFloat(precioProductoUno);
    precioProductoDos=parseFloat(precioProductoDos);
    precioProductoTres=parseFloat(precioProductoTres);  

    precioSuma=precioProductoUno+precioProductoDos+precioProductoTres;

    iva=precioSuma*21/100;

    preciofinalConIva=precioSuma+iva;
    

    alert(`el precio final con iva es: ${preciofinalConIva}`);
}