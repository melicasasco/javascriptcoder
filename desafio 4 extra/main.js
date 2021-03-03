// DESAFIO FUNCIONES RELACIONADAS

function ofertarNumero () {
    let oferta = prompt("Ingrese un valor. En caso de querer terminar, escriba salir");
    return oferta;
}

function calcularComision (valorOfertado, porcentajeComision){
    let resultado = parseInt(valorOfertado * porcentajeComision);
    return resultado;
}

function precioFinal (valorOfertado) {
    let valorOferta;
    if (valorOfertado <= 200) {
        valorOferta = calcularComision (valorOfertado, 1.2);
        alert("En caso de resultar el comprador del lote, deberá abonar un 20% más de comisión. " + "Valor final $" + valorOferta);
    }
    else if (valorOfertado <=500) {
        valorOferta = calcularComision (valorOfertado, 1.3);
        alert("En caso de resultar el comprador del lote, deberá abonar un 30% más de comisión. " + "Valor final $" + valorOferta);
    }
    else {
        valorOferta = calcularComision (valorOfertado, 1.4);
        alert("En caso de resultar el comprador del lote, deberá abonar un 40% más de comisión. " + "Valor final $" + valorOferta);
    }
}

var realizarOferta = prompt("¿Desea realizar una oferta?"); 
if (realizarOferta ==  "si" || realizarOferta ==  "sí" ||
    realizarOferta ==  "SI" || realizarOferta ==  "SÍ") {

  let ofertaNumero = ofertarNumero ();

    while(ofertaNumero != "salir") {
        precioFinal (ofertaNumero);
        ofertaNumero = prompt("Si quiere realizar otra oferta, ingrese un valor, sino escriba salir"); 
    }
}
