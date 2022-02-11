/*
Autor: Abregú Mariela.
Enunciado IF 10.
*/

function mostrar()
{
	let nota;
    let maximo=10;
	let minimo=1;

	nota=Math.round(Math.random()*(maximo-minimo)+minimo);
	
    if(nota>=9){
        alert("EXELENTE");
	} 
	else{
		if(nota>4)
		alert("APROBO");
		else{
			if(nota<4)
			alert("VAMOS, la proxima se puede");
		}
	}
	
	//alert(numeroRandom);	

}