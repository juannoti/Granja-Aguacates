// Seleccionar elementos en HTML

const subtitulo = document.getElementById("Subtítulo");
console.log(subtitulo);

// function subtituloVisible(){
//     subtitulo.hidden=!subtitulo.hidden
// }

const parrafos = document.querySelectorAll("p");
console.log(parrafos);

const parrafosPares = document.querySelectorAll(".parrafoPar");
console.log(parrafosPares);

parrafosPares.forEach((parrafo) => {
  parrafo.hidden = true;
});

const parrafoNuevo = document.createElement("p");
const nodoTexto = document.createTextNode(
  "Este párrafo está creado dinámicamente a través de javascript",
);

parrafoNuevo.appendChild(nodoTexto)
const divVacio = document.getElementById('div-vacio')
divVacio.appendChild(parrafoNuevo)