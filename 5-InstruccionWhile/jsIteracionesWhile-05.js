/*
Abregú Mariela Victoria
ej 5 while

Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");
    sexoIngresado = sexoIngresado.toLowerCase();
	while (sexoIngresado!="f" && sexoIngresado!="m") {
		sexoIngresado = prompt("ingrese f ó m .");
        sexoIngresado = sexoIngresado.toLowerCase();
	}
	if (sexoIngresado=="f") {
		sexoIngresado="femenino";
	}else{
		sexoIngresado="masculino";
	}

    document.getElementById("txtIdSexo").value=sexoIngresado;
	}//FIN DE LA FUNCIÓN