//formulario seccion CONTACTO


let miFormulario = $("#formulario");
miFormulario.submit(validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    var nombre = $("#name").val();
 // si el nombre es distinto de vacio entro al if
    if(nombre != "") {
        console.log("Formulario Enviado");
        $("#contactoMensaje").html('');
        $("#contactoMensaje").append(`<div id="mensajeContacto" class="d-flex justify-content-center pt-2">
        Gracias por su consulta ${nombre}, responderemos a la brevedad</div>`);
        $("#mensajeContacto").css("color", "grey")
        .slideUp(0)
        .slideDown(2000);
        formulario.reset();
    }

}


