/*
Autor: Abregú Mariela.
Enunciado Ejercicio 03:

Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/

function mostrar() 
{
    let nombreIngresado;

    nombreIngresado = document.getElementById("txtIdNombre").value;

    alert(nombreIngresado);
}
