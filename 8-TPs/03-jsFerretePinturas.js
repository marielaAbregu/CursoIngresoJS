/*
Autor: Abregú Mariela.
Enunciado Ejercicio TP 03:

3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    //℃ =℉ - 32/1.8000

    let fahrenheit;
    let centigrado;

    fahrenheit=document.getElementById("txtIdTemperatura").value;
    fahrenheit=parseFloat(fahrenheit);
    
    centigrado=fahrenheit-32/1.8;

    alert(`${fahrenheit} grados fahrenheit, equivalen a ${centigrado.toFixed(2)} grados centigrados`);

}

function CentigradosFahrenheit () 
{
    //℉ =℃ * 1.8000+ 32.00

    let centigrado;
    let fahrenheit;

    centigrado=document.getElementById("txtIdTemperatura").value;
    centigrado=parseFloat(centigrado);

    fahrenheit=centigrado*1.8+32;

    alert(`${centigrado} grados centigrados, equivalen a ${fahrenheit.toFixed(2)} grados fahrenheit`);
}
