
const boton = document.getElementById('boton')
const botonReiniciar = document.getElementById('boton-reiniciar')
const inputTexto = document.getElementById("input-texto")

boton.addEventListener('click', botonHandler)

function botonHandler(eventoClick){
    const textoTarea = inputTexto.value
    inputTexto.value = ''
    checkpoint = document.createElement('input')
    checkpoint.type = 'checkbox'
    parrafoTarea = document.createElement('p')
    parrafoTarea.innerHTML = "- " + textoTarea
    document.body.appendChild(checkpoint)
    document.body.appendChild(parrafoTarea)
}

botonReiniciar.addEventListener('click', botonReiniciarHandler)

function botonReiniciarHandler(eventoClick){
    inputTexto.value = ''
    parrafoTarea.innerHTML = ''
}