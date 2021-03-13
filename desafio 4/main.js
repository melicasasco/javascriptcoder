function calcularComision (valorOfertado, porcentajeComision){
    let resultado = parseInt(valorOfertado * porcentajeComision);
    return resultado;
}

var realizarOferta = prompt("¿Desea realizar una oferta?"); 
if (realizarOferta ==  "si" || realizarOferta ==  "sí" ||
    realizarOferta ==  "SI" || realizarOferta ==  "SÍ") {
 
    let ofertaNumero = prompt("Ingrese un valor. En caso de querer terminar, escriba salir");

    while(ofertaNumero != "salir") {
        switch (true) {
            case (ofertaNumero <= 200) :
                valorOferta = calcularComision (ofertaNumero, 1.2);
                alert("En caso de resultar el comprador del lote, deberá abonar un 20% más de comisión. " + "Valor final $" + valorOferta);
                break;
            case (ofertaNumero <= 500) :
                valorOferta = calcularComision (ofertaNumero, 1.3);
                alert("En caso de resultar el comprador del lote, deberá abonar un 30% más de comisión. " + "Valor final $" + valorOferta);
                break;
            default:
                valorOferta = calcularComision (ofertaNumero, 1.4);
                alert("En caso de resultar el comprador del lote, deberá abonar un 40% más de comisión. " + "Valor final $" + valorOferta);
        }
        ofertaNumero = prompt("Si quiere realizar otra oferta, ingrese un valor, sino escriba salir"); 
    }
}

