/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{   
	let respuesta;
	let numeroIngresado;
	let sumaNegativos=0;
	let sumaPositivos=0;
	let cantidadPositivos=0;
	let cantidadNegativos=0;
	let cantidadCeros=0;
	let cantidadPares=0;
	let promedioPositivos;
	let promedioNegativos;
	let restaPositivosNegativos;

	respuesta=`s`;

    do {
		numeroIngresado=parseInt(prompt("ingrese un número: "));
		if (numeroIngresado==0) {
			cantidadCeros++;
		}
	} while (respuesta==`s`);
	
	
	
	
	
	
	
	
	
	
	/*//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;

	respuesta="si";

	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}//fin del while

	document.write("la suma de negativos es :"+sumaNegativos);*/
}//FIN DE LA FUNCIÓN