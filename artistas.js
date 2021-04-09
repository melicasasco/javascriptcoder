const artistas = [];

function cargarArtistas() {
  // Ajax
  $.getJSON('artistas.json', (res, estado) => {
    if (estado === "success") {
      console.log(res);
      res.map(a=>artistas.push(a));
    } else {
      console.log('Error al cargar artistas.')
    }
  });
}

function agregarArtistaADom() {
  for(artista of artistas) {
    $('#artistas').append(`
      <div id="artista_${artista.id}">
        <div class="row">
          <div class="col-6">
            <h2>${artista.nombre}</h2>
            <p>${artista.obra} - ${artista.tecnica}</p>
            <p>${artista.año}</p>
          </div>
        </div>
      </div>
    `);
  }
}

function filtrarYOrdenar() {
  for(artista of artistas) {
    const coincideNombre = artista.nombre.toLowerCase().substr(0,busqueda.length) === busqueda.toLowerCase();
      $(`#artista_${artista.id}`).show();
  }
}

// 1) 
cargarArtistas();

// 2) ready
$(() => {
  agregarArtistaADom();
  $("#formBuscar").submit((e) => {
    e.preventDefault();
    const busqueda = $("#buscar").val();
    filtrarYOrdenar();
  });
});

