//formulario de la seccion Subastas


class Obra {
    constructor (artista, tecnica, titulo, base) {
        this.artista = artista;
        this.tecnica = tecnica;
        this.titulo = titulo;
        this.base = base;
    }
}

// Declaro funcion que calcula la comision

function calcularComision (valorOfertado, porcentajeComision){
    let resultado = parseInt(valorOfertado * porcentajeComision);
    return resultado;
}

let miFormulario = document.getElementById("formularioSubastas");
miFormulario.addEventListener("submit", validarFormulario);

//funcion p recorrer las ofertas guardadas en el sessionStorage
function verMiOferta () {
    let len=sessionStorage.length;
    for(var i=0; i<len; i++) {
        var key = sessionStorage.key(i);
        var value = sessionStorage.getItem(key);
        alert("Usted ofertó " + value + " por la obra intitulada " + key);
    }
}

function validarFormulario(e){
    e.preventDefault();
    console.log("Formulario Enviado");
    let artista = document.getElementById("artistaObra").textContent;
    let titulo = document.getElementById("tituloObra").textContent;
    let tecnica = document.getElementById("tecnicaObra").textContent;
    let base = parseInt(document.getElementById("baseObra").textContent);
    const obra1 = new Obra (artista, tecnica, titulo, base); 
    var nombre = document.getElementById("name").value;
    console.log(obra1.base);   
    var email = document.getElementById("email").value;
    var oferta = parseInt(document.getElementById("oferta").value);
    if (!isNaN(oferta)) {
        let mensajeOferta = document.getElementById("mensajeOferta");
        mensajeOferta.innerHTML = '';
        if (oferta <= obra1.base)  {
            let nuevoNodoOferta = document.createElement("div");
            nuevoNodoOferta.className = "Cormorant";
            nuevoNodoOferta.innerHTML = "Hola " + nombre + ", debe ofertar un valor mayor al precio base: "
            + obra1.base + "U$S. por favor revise el monto ingresado.";
            mensajeOferta.appendChild(nuevoNodoOferta)
        }
        else {
            let valorTotal = calcularComision(oferta, 1.185);
            console.log(valorTotal);
            let nuevoNodoOferta = document.createElement("div");
            nuevoNodoOferta.className = "Cormorant";
            nuevoNodoOferta.innerHTML = "Hola " + nombre + ", muchas gracias por su oferta. En caso de resultar el comprador de la obra, deberá abonar un total de "
            + valorTotal + "U$S. Le enviaremos un mensaje a su correo: " + email;
            mensajeOferta.appendChild(nuevoNodoOferta);
            formularioSubastas.reset();
            sessionStorage.setItem(titulo, oferta);
            let nuevoNodoVerOferta = document.createElement("div");
            nuevoNodoVerOferta.className = "d-flex justify-content-center pb-4";
            nuevoNodoVerOferta.innerHTML = "<button type=\"text\" onclick=\"verMiOferta()\" class=\"btn-dark\">Ver mi oferta</button>";
            mensajeOferta.appendChild(nuevoNodoVerOferta);
        }
    }
}


