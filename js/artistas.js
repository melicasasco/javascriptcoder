// declaro array vacios artistas
const artistas = [];


//funcion para cargar el array con los artistas que tengo dentro del json
function cargarArtistas() {
  // Uso de Ajax con archivo local artistas.json  
  $.getJSON('../js/artistas.json', (res, estado) => {
    if (estado === "success") {
      console.log(res);
      //guardo los objetos que tengo en json en el array
      res.map(a=>artistas.push(a));
    } else {
      console.log('Error al cargar artistas.')
    }
    console.log("artistas cargados");
  });
}

// funcion para agregar artistas al html
function agregarArtistaADom() {
  console.log("hola");
  // recorro el array de artistas
  for(artista of artistas) {
    //para cada elemento de artistas inserto un div con sus datos
    $('#artistas').append(`
      <div id="artista_${artista.id}">
        <div class="row d-flex justify-content-center">
          <div class="col-4 border">
            <p class="Lato"><b>${artista.nombre}</b></p>
            <p class="Lato">${artista.obra} - ${artista.tecnica}</p>
            <p class="Lato">${artista.año}</p>
          </div>
        </div>
      </div>`);
      //los dejo en hide para elegir luego cuando losmuestro
    $(`#artista_${artista.id}`).hide();
  }
}


function filtrarYOrdenar(busqueda) {
  // recorro el array de artistas
  for(artista of artistas) {
    //guardo en variable coincideNombre true si los primeros caracteres del artista coinciden con lo ingresado
    const coincideNombre = artista.nombre.toLowerCase().substr(0,busqueda.length) === busqueda.toLowerCase();
    //si coincide es true entro al if p mostrar el div
    if (coincideNombre) {
      console.log(artista.id);
      $(`#artista_${artista.id}`).show();
      //si es false hago hide
    }else {
      $(`#artista_${artista.id}`).hide();
    }
  }
}

// 1) 
cargarArtistas();

// 2) ready
$(() => {
  console.log("ready");
  agregarArtistaADom();
  $("#formBuscar").submit((e) => {
    e.preventDefault();
    const busqueda = $("#buscar").val();
    filtrarYOrdenar(busqueda);
  });
});

