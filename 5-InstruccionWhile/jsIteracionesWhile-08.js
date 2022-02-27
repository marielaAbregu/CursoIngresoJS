/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

    function mostrar()
{
	let respuesta;
	let numeroIngresado;
	let positivos=0;
	let negativos=1;
    let flag=0;


	do{
		numeroIngresado=parseInt(prompt("ingrese un número"));
		if(numeroIngresado>=0) {
			positivos=positivos+numeroIngresado;
		}
		else{
			flag=1;
            negativos=negativos*numeroIngresado;
		}
		respuesta=prompt("desea ingresar otro número?");

	}while (respuesta=='s');

    if(flag==0) {
		negativos=0;
	}
	
	document.getElementById("txtIdSuma").value=positivos;
	document.getElementById("txtIdProducto").value=negativos;
	

	

	
		
		
		
		

}//FIN DE LA FUNCIÓN