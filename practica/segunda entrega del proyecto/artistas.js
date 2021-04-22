// Buscador de artistas en artistas.html
// Declaro mi array de artistas
let artistas = [
    { nombre: "Berni, Antonio"},
    { nombre: "Castagnino, Juan Carlos"},
    { nombre: "Alonso, Carlos"},
    { nombre: "Minujin, Marta"},
    { nombre: "Roux, Guillermo"},
    { nombre: "Roux, Ricardo"},
    { nombre: "Tasso, Torcuato"},
    { nombre: "Quinquela, Benito Martin"},
    { nombre: "Koek Koek, Stephen"},
    { nombre: "Lynch, Justo"}
];


// Agregar artista
function agregarArtista (artista) {
let nuevoNodoArtista = document.createElement("div");
nuevoNodoArtista.id = artista.nombre.toLowerCase();
nuevoNodoArtista.className = "Lato";
nuevoNodoArtista.innerHTML = 
    `<p>${artista.nombre}</p>`;
document.getElementById("lista").appendChild(nuevoNodoArtista);
}

// Borrar todos los artists
function borrarTodosLosArtistas() {
document.getElementById("lista").innerHTML = '';
}

const buscar = (e) => {
// Mostrar los artistas que coincidan con la busqueda
borrarTodosLosArtistas();
//const artistasFiltrados = artistas.filter(a => a.nombre.toLocaleLowerCase() == e.target.value.toLocaleLowerCase());
const artistasFiltrados = artistas.filter(a => a.nombre.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
for(let artista of artistasFiltrados){
    agregarArtista(artista);
    }
}

// Agregar manejador de evento change
document.getElementById("artista").addEventListener("change", buscar);



