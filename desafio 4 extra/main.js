/* DESAFIO FUNCIONES RELACIONADAS

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


*/


let persona;

function Persona (nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

function ingresarDatos() {
    let nombre = prompt ("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let email = prompt("Ingrese su email");
    persona = new Persona (nombre, apellido, email);
}

ingresarDatos();
alert("Hola" + persona.nombre + persona.apellido);

//

function Cliente (nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.clienteCompleto = function() { return nombre + "" + apellido}

}

const cliente = new Cliente ();
alert()