const artistas = [];

function cargarArtistas() {
  // Ajax
  $.getJSON('artistas.json', (res, estado) => {
    if (estado === "success") {
      console.log(res);
      res.map(p=>artistas.push(p));
    } else {
      console.log('Error al cargar artistas.')
    }
  });
}

function agregarartistasAmiDom() {
  for(artista of artistas) {
    $('#artistas').append(`
      <div id="artista_${artista.id}">
        <div class="row py-3">
          <div class="col-3 px-3">
            <img width=180 height=300 src="${artista.obra}">
          </div>
          <div class="col-6">
            <h2>${artista.nombre}</h2>
            <p>${artista.tecnica} - ${artista.medidas}</p>
            <p>${artista.año}</p>
          </div>
        </div>
      </div>
    `);
  }
}

function filtrarYOrdenar(busqueda, obra) {
  for(artista of artistas) {
    const coincideartista = artista.nombre.toLowerCase().substr(0,busqueda.length) === busqueda.toLowerCase();
    const coincideObra = artista.obra.toLowerCase() === obra.toLowerCase();
    if (coincideartista && coincideObra) {
      $(`#artista_${artista.id}`).show();
    } else {
      $(`#artista_${artista.id}`).hide();
    }
  }
}

// 1) 
cargarArtistas();

// 2) ready
$(() => {
  agregarartistasAmiDom();
  $("#formBuscar").submit((e) => {
    e.preventDefault();
    const busqueda = $("#buscar").val();
    const obra = $("#obra option:selected").text();
    filtrarYOrdenar(busqueda,obra);
  });
});