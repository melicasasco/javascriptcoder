//formulario seccion CONTACTO


let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log("Formulario Enviado");
    var nombre = document.getElementById("name").value;   
    alert("Gracias por su consulta " + nombre + " Responderemos a la brevedad");
    formulario.reset();
}

