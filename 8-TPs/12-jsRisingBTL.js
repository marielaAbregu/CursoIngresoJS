/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
    let edadIngresada;
    let sexoIngresado;
    let estadoCivilIngresado;
	let sueldoBruto;
	let numeroLegajo;
	let nacionalidad;

	//punto 1//

	edadIngresada=parseInt(prompt("ingrese su edad (18 a 90 años"));
	
    while (edadIngresada<18||edadIngresada>90) {
		edadIngresada=parseInt(prompt("la edad ingresada no es valida, reingrese su edad (18 a 90 años"));
	}

	//punto 2//

	sexoIngresado=prompt("ingrese su sexo, f para femenino, m para masculino").toLowerCase();

	while (sexoIngresado !="m" && sexoIngresado !="f") {
		sexoIngresado=prompt("no ingreso un sexo valido, ingrese su sexo, f para femenino, m para masculino").toLowerCase();
	}
    
	//punto 3//

	estadoCivilIngresado=parseInt(prompt("ingrese su estado civil: nº 1 para soltero, nº 2 para casado, nº 3 para divorciado, nº 4 para viudo"));

	while (estadoCivilIngresado<1 !! estadoCivilIngresado>4) {
		estadoCivilIngresado=parseInt(prompt("el estado civil ingresado es invalido.ingrese su estado civil: nº 1 para soltero, nº 2 para casado, nº 3 para divorciado, nº 4 para viudo"));
	}

	//punto 4//
	numeroLegajo=parseInt(prompt("ingrese su número de legajo, numérico de 4 cifras, sin ceros a la izquierda."));

	while (numeroLegajo<1000 || numeroLegajo) {
		
	}






}
