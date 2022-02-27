/*
Abregú Mariela Victoria
TP 4 if
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
  let cantidadLamparas;
  let marca;
  let precioInicial;
  let porcentajeDescuento;
  let precioFinal;
  const PRECIO_UNITARIO_SIN_DESCUENTO = 35;
  const IIBB=10;
  let precioConIibb;
  

  cantidadLamparas = document.getElementById("txtIdCantidad").value;
  cantidadLamparas = parseInt(cantidadLamparas);

  marca = document.getElementById("Marca").value;
  
  //punto A //
  if (cantidadLamparas >= 6) {
    porcentajeDescuento = -50;
  } 
  //punto B//
  else if (cantidadLamparas == 5) {
    if (marca == "ArgentinaLuz") {
      porcentajeDescuento = -40;
    } else {
      porcentajeDescuento = -30;
    }
  } 
  //punto C //
  else if (cantidadLamparas == 4) {
    if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
      porcentajeDescuento = -25;
    } else {
      porcentajeDescuento = -20;
    }
  } 
  //punto D //
  else if (cantidadLamparas == 3) {
    if (marca == "ArgentinaLuz") {
      porcentajeDescuento = -15;
    }
    else if (marca == "FelipeLamparas") {
      porcentajeDescuento = -10;
    } else {
      porcentajeDescuento = -5;
    }
  }
  else{
    porcentajeDescuento=0;
  }
  
  precioInicial=cantidadLamparas*PRECIO_UNITARIO_SIN_DESCUENTO;
  porcentajeDescuento=precioInicial*porcentajeDescuento/100;
  precioFinal=precioInicial+porcentajeDescuento;
  
  if(precioFinal>120){
    precioConIibb=precioFinal*IIBB/100;
    precioFinal=precioFinal+precioConIibb;
    alert(`Usted pago $${precioConIibb} de IIBB`);
  }

  //punto E//

  document.getElementById("txtIdprecioDescuento").value=precioFinal;
    ;
}
