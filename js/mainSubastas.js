//formulario de la seccion Subastas

//declaro la clase obra con atributo artista, tecnica, titulo y base

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


// cuando el usuario hace submit del formulario con el ID formularioSubastas llamo funcion validarFormulario

$("#formularioSubastas").submit(validarFormulario);

$("#mostrarOfertas").click(verMiOferta);

function verMiOferta (e) {
    console.log("Entro a la funcion");
    //me guardo en len el length de sessionstorage
    let len=sessionStorage.length;
    $("#verMiOferta").html('');
    //recorro todos los elementos de mi session storage
    for(var i=0; i<len; i++) {
        // Obtengo valor del sessionStorage y si es numerico entro al if
        if(!isNaN(sessionStorage.getItem(sessionStorage.key(i)))){
            var key = sessionStorage.key(i);
            var value = sessionStorage.getItem(key);
            $("#verMiOferta").append(`<div class="container">
                                        <div class="row d-flex justify-content-center">
                                            <div class="col-6 text-center">
                                                <p class="oferta">Usted ofertó ${value} usd por la obra intitulada ${key}</p>
                                            </div>
                                        </div>
                                    </div>`);     

        }
    }
    //Método encadenado id oferta
    $(".oferta").css("color", "grey")
    .slideUp(0)
    .slideDown(2000);
    $("#verMiOferta").append(`<hr>
        <p id="volverSubastas" class="text-center"><a href="subastas.html"><u>Ver más obras de la subasta</u></a></p>`);
}

function borrarContenido (id) {
    $(`#${id}`).html("");
}


function obtenerObra () {
    var artista = $("#artistaObra").text();
    var titulo = $("#tituloObra").text();
    var tecnica = $("#tecnicaObra").text();
    var base = parseInt($("#baseObra").text());
    const obra = new Obra (artista, tecnica, titulo, base); 
    return obra;

}

function validarFormulario(e){
    e.preventDefault();
    //creo variables que guardan valor de lo que figura en la tabla con los datos de la obra
    const obra1 = obtenerObra();
    var nombre = $("#name").val();
    var email = $("#email").val();
    var oferta = parseInt($("#oferta").val());
    console.log(oferta);
    // si la oferta es un numero, entro al if
    if (!isNaN(oferta)) {
        borrarContenido("mensajeOferta");

        //Si la oferta es menor o igual que el numero de base que figura en la tabla, doy ese msj
        if (oferta <= obra1.base)  {
            $("#mensajeOferta").append(`<div class="Cormorant" style="display: none">Hola ${nombre}, debe ofertar un valor mayor al precio base:
            ${obra1.base}U$S. por favor revise el monto ingresado.</div>`);
            $("div").fadeIn(700); 
        }
        //Si la oferta es mayor que el numero de base que figura en la tabla, doy ese msj y guardo el contenido
        
        else {
            let valorTotal = calcularComision(oferta, 1.185);
            console.log(valorTotal);
            $("#mensajeOferta").append(`<div class="Cormorant" style="display: none">Hola ${nombre}, muchas gracias por su oferta. En caso de resultar el comprador de la obra, deberá abonar un total de
            ${valorTotal}U$S. Le enviaremos un mensaje a su correo: ${email}</div>`)
            $("div").fadeIn(700); 
            $("#formularioSubastas").trigger("reset");
            // me guardo la el titulo de la obra y la oferta realizada
            sessionStorage.setItem(obra1.titulo, oferta);
            // creo un boton por el cual puedo ver la oferta guardada porque le pongo un onclick
            //que llama a la funcion "verMiOferta()"
            $("#mensajeOferta").append(`<div class="d-flex justify-content-center pb-4">
            <a id="paginaOferta" class="btn btn-mod btn-border btn-sm " href="verMiOferta.html" type="text">
             Ver mis ofertas</a> </div>`)
            
        }
    }
}


$("#mostrarOfertas").fadeOut("slow", function(){
    //Cuando termina de ocultarse el elemento lo mostramos nuevamente
    $("#mostrarOfertas").fadeIn(1000);
}); 


$("#foto").fadeOut("slow", function(){
    //Cuando termina de ocultarse el elemento lo mostramos nuevamente
    $("#foto").fadeIn(5000);
}); 