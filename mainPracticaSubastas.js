//formulario seccion Subastas


// Declaro funcion que calcula la comision
function calcularComision (valorOfertado, porcentajeComision){
    let resultado = parseInt(valorOfertado * porcentajeComision);
    return resultado;
}

let miFormulario = document.getElementById("formularioSubastas");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log("Formulario Enviado");
    var nombre = document.getElementById("name").value;   
    var email = document.getElementById("email").value;
    var oferta = document.getElementById("oferta").value;
        calcularComision = oferta * 1.185;
        alert("Gracias por su consulta " + nombre + " Responderemos a la brevedad");
        console.log(calcularComision);
        let nuevoNodoOferta = document.createElement("div");
        nuevoNodoOferta.className = "Cormorant";
        nuevoNodoOferta.innerHTML = "Hola " + nombre + ", muchas gracias por su oferta. En caso de resultar el comprador de la obra, deberá abonar "
        + calcularComision + "U$S más de comisión + iva. Le enviaremos un mensaje a su correo: " + email;
        document.getElementById("mensajeOferta").appendChild(nuevoNodoOferta);
        formularioSubastas.reset();
}

