//formulario seccion CONTACTO


let miFormulario = $("#formulario");
miFormulario.submit(validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log("Formulario Enviado");
    var nombre = $("#name").val(); 
    $("#contactoMensaje").append(`<div id="mensajeContacto" class="d-flex justify-content-center pt-2">
    Gracias por su consulta ${nombre}, responderemos a la brevedad</div>`);
    $("#mensajeContacto").css("color", "grey")
    .slideUp(0)
    .slideDown(2000);
    formulario.reset();
    }


