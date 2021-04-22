//PRIMERA ENTREGA DEL PROYECTO - GALERIA DE ARTE NEXUS 


// Defino clase persona
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

// Declaro funcion que calcula la comision
function calcularComision (valorOfertado, porcentajeComision){
    let resultado = parseInt(valorOfertado * porcentajeComision);
    return resultado;
}

// Declaro e instancio arrays a utilizar
var obras = [{
    artista: "Carlos Alonso",
    titulo: "Naturaleza muerta",
    tecnica: "Oleo sobre tela",
    oferta: 0
},{
    artista: "Carlos Alonso",
    titulo: "Mujer pensativa",
    tecnica: "Oleo sobre tela",
    oferta: 0
}, {
    artista: "Carlos Alonso",
    titulo: "Maternidad",
    tecnica: "Mixta",
    oferta: 0
}, {
    artista: "Koek Koek",
    titulo: "Marina",
    tecnica: "Oleo sobre tela",
    oferta: 0
}, {
    artista: "Justo Lynch",
    titulo: "Puerto",
    tecnica: "Oleo sobre tela",
    oferta: 0
}, {
    artista: "Grete Stern",
    titulo: "Retrato Ernesto Sabato",
    tecnica: "Oleo sobre tela",
    oferta: 0
}];


// Ofertas se inicializa vacío para luego ir completandolo
var ofertas = [];

function botonOferta () {

    // Le pido al usuario sus datos para crear el objeto persona
    var nombre = prompt ("Ingrese su nombre");
    var apellido = prompt ("Ingrese su apellido");
    var email = prompt ("Ingrese su email");

    // Creo el objeto persona1
    const persona1 = new Persona (nombre, apellido, email);

    // Saludo al usuario utilizando el método nombreCompleto del objeto persona y guardo si quiere realizar una oferta o no
    var realizarOferta = prompt ("Hola " + persona1.nombreCompleto() + "¿Desea realizar oferta?");

    // Divido el camino del usuario de acuerdo a su respuesta. Si dice que si, entra al if
    if (realizarOferta ==  "si" || realizarOferta ==  "sí" ||
        realizarOferta ==  "SI" || realizarOferta ==  "SÍ") {

    // Hago un for para recorrer cada una de las obras y preguntarle al usuario si quiere hacer una oferta.
        for (let i=0; i<=obras.length-1; i++) {
            let ofertarObra = prompt ("Desea ofertar por la obra: " + obras[i].titulo + " del artista " + obras[i].artista + " cuya técnica es " + obras[i].tecnica);
            if (ofertarObra == "si"  || ofertarObra ==  "sí" || 
                ofertarObra ==  "SI" || ofertarObra ==  "SÍ") {
                let ofertaNumero = prompt("Ingrese un valor");
    // Luego de haber ingresado un valor se le calcula una comision de venta que va a depender del numero ofertado
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
    // Guardo el valor en el array de ofertas
                obras[i].oferta = valorOferta 
            }
        }
    // Ordeno el array de menor a mayor
        obras.sort((a, b) =>  {
            if (a.oferta < b.oferta){
                return -1;
            }
            if (a.oferta > b.oferta){
                return 1;
            }
            return 0;
        });
        for (let i=0; i<=obras.length-1; i++) {
            let miTablaParaInsertar = document.getElementById("tablaOfertas");
            let elementoOfertas = document.createElement("tr");
            elementoOfertas.innerHTML = "<td>" + obras[i].artista + "</td>" +
				"<td>" + obras[i].titulo + "</td>" + 
				"<td>" + obras[i].oferta + "</td>";
            //elementoOfertas.innerHTML = "Para la obra: " + obras[i].titulo + " su oferta fue de " + obras[i].oferta + " <br>";
            miTablaParaInsertar.appendChild(elementoOfertas);
            //alert("Para la obra: " + obras[i].titulo + " su oferta fue de " + obras[i].oferta);
        }
        alert("te enviaremos tus ofertas al mail: " + persona1.email);
    }
    else {
        alert("Muchas gracias por su visita.");
    }
}
/*
// Se recorren las ofertas para mostrarle al usuario los precios de lo que oferto

*/


