/*
Autor: Abregú Mariela.
Enunciado Ejercicio TP 02:

2.	Para el departamento de Construcción:

A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.


B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let alambre;

    largo=document.getElementById("txtIdLargo").value;
    ancho=document.getElementById("txtIdAncho").value;

    largo=parseFloat(largo);
    ancho=parseFloat(ancho);

    perimetro=(ancho+largo)*2;

    alambre=perimetro*3;

    alert(`la cantidad de alambre necesaria es: ${alambre} mts.`);


}
function Circulo () 
{
	let radio;
    let perimetro;
    let alambre;
    const PI=Math.PI;

    radio=document.getElementById("txtIdRadio").value;
    radio=parseFloat(radio);
    
    perimetro=2*PI*radio;

    alambre=perimetro*3;

    alert(`la cantidad de alambre necesaria es: ${alambre.toFixed(2)} mts.`);


    
}
function Materiales () 
{
	let largo;
    let ancho;
    let area;
    let bolsasCal;
    let bolsaCemento;
    


    largo=document.getElementById("txtIdLargo").value;
    ancho=document.getElementById("txtIdAncho").value;

    largo=parseFloat(largo);
    ancho=parseFloat(ancho);

    area=largo*ancho;
    
    bolsaCemento=area*3;
    bolsasCal=area*2;

    alert(`ustes necesita: ${bolsaCemento} bolsas de cemento y ${bolsasCal} bolsas de cal`);





}