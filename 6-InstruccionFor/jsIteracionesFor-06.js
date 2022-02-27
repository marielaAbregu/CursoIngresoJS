function mostrar() {
  let i;
  let numeroIngresado;
  let cantidadNumerosPares = 0;

  numeroIngresado = parseInt(prompt("ingrse un numero"));

  for (i = 0; i <= numeroIngresado; i++) {
    if (i % 2 == 0 && i != 0) {
      cantidadNumerosPares++;
      console.log(i);
    }
  }
  console.log("cantidad de numeros pares encontrados: " + cantidadNumerosPares);
} //FIN DE LA FUNCIÓN
