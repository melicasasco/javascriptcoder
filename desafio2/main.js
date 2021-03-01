var realizarOferta = prompt("¿Desea realizar una oferta");

if (realizarOferta == "si" || realizarOferta == "Sí" ||
    realizarOferta == "SI" || realizarOferta == "SÍ") {
    var montoOferta = prompt("Ingrese monto total de su oferta");
    var montoOfertaNumero = parseInt(montoOferta);

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
    alert ("Gracias. Puede visitar todas nuestras obras en la sección subastas");
}