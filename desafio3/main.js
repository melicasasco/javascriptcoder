/*var realizarOferta = prompt("¿Desea realizar una oferta");

if (realizarOferta == "si" || realizarOferta == "Sí" ||
    realizarOferta == "SI" || realizarOferta == "SÍ") {
    var montoOferta = prompt("Ingrese monto total de su oferta");
    

    //calcular monto de las comisiones
    let  valorOferta
    if (montoOfertaNumero >100 && montoOfertaNumero <=200){
        valorOferta = parseInt(montoOfertaNumero*1.2);
        alert("En caso de resultar el comprador del lote, deberá abonar un 20% más de comisión. " + "Valor final $" + valorOferta);

    } else if (montoOfertaNumero <= 100) {
        valorOferta = parseInt(montoOfertaNumero*1.1);
        alert("En caso de resultar el comprador del lote, deberá abonar un 10% más de comisión. " + "Valor final $" + valorOferta);

    } else{
        valorOferta = parseInt(montoOfertaNumero *1.30);
        alert("En caso de resultar el comprador del lote, deberá abonar un 30% más de comisión. " + "Valor final $" + valorOferta);
    }
} else {
    alert ("Gracias. Puede visitar todas nuestras obras en la seccion subastas");
} */


var realizarOferta = prompt("¿Desea realizar una oferta?"); 
if (realizarOferta ==  "si" || realizarOferta ==  "sí" ||
    realizarOferta ==  "SI" || realizarOferta ==  "SÍ") {
 
    let ofertaNumero = prompt("Ingrese un valor. En caso de querer terminar, escriba salir");

    while(ofertaNumero != "salir") {
        switch (true) {
            case (ofertaNumero <= 200) :
                valorOferta = parseInt(ofertaNumero * 1.2);
                alert("En caso de resultar el comprador del lote, deberá abonar un 20% más de comisión. " + "Valor final $" + valorOferta);
                break;
            case (ofertaNumero <= 500) :
                valorOferta = parseInt(ofertaNumero * 1.3);
                alert("En caso de resultar el comprador del lote, deberá abonar un 30% más de comisión. " + "Valor final $" + valorOferta);
                break;
            default:
                valorOferta = parseInt(ofertaNumero * 1.4);
                alert("En caso de resultar el comprador del lote, deberá abonar un 40% más de comisión. " + "Valor final $" + valorOferta);
        }
        ofertaNumero = prompt("Si quiere realizar otra oferta, ingrese un valor, sino escriba salir"); 
    }
}

