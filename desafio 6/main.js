//DESAFIO ARRAYS

class Persona {
    constructor(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    }
    nombreCompleto () {
        return this.nombre + " " + this.apellido;
    }
}

function calcularComision (valorOfertado, porcentajeComision){
    let resultado = parseInt(valorOfertado * porcentajeComision);
    return resultado;
}

var obras = ["Naturaleza muerta", "Mujer pensativa", "Maternidad", "Marina","Puerto", "Retrato Ernesto Sabato"];
var artistas = ["Carlos Alonso", "Carlos Alonso", "Carlos Alonso", "Koek Koek", "Justo Lynch", "Grete Stern"];
var tecnica = ["Óleo sobre tela", "Óleo sobre tela", "Mixta", "Óleo sobre tela", "Óleo sobre tela", "Fotografía"];
var ofertas = [];

var nombre = prompt ("Ingrese su nombre");
var apellido = prompt ("Ingrese su apellido");
var email = prompt ("Ingrese su email");
const persona1 = new Persona (nombre, apellido, email);
var realizarOferta = prompt ("Hola " + persona1.nombreCompleto() + "¿Desea realizar oferta?");


if (realizarOferta ==  "si" || realizarOferta ==  "sí" ||
    realizarOferta ==  "SI" || realizarOferta ==  "SÍ") {
    for (let i=0; i<=obras.length-1; i++) {
        let ofertarObra = prompt ("Desea ofertar por la obra: " + obras[i] + " del artista " + artistas[i] + " cuya técnica es " + tecnica[i]);
        if (ofertarObra == "si"  || ofertarObra ==  "sí" || 
            ofertarObra ==  "SI" || ofertarObra ==  "SÍ") {
            let ofertaNumero = prompt("Ingrese un valor");
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
            ofertas.push (valorOferta);
        }
        else {
            ofertas.push (0);
        }
    }
    for (let i=0; i<=ofertas.length-1; i++) {
        alert("Para la obra: " + obras[i] + " su oferta fue de " + ofertas[i]);
    }
    alert("te enviaremos tus ofertas al mail: " + persona1.email);
}
else {
    alert("Muchas gracias por su visita.")
}


  





