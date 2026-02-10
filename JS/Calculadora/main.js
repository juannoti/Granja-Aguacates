
// Selecciono los botones

const botonCalcular = document.getElementById('boton-calcular')
const botonReiniciar = document.getElementById('boton-reiniciar')
const inputTexto = document.getElementById("input-texto")

let parrafoSuma
let parrafoMedia

// Funcionalidad Botón Calcular

botonCalcular.addEventListener('click', botonCalcularHandler)

function botonCalcularHandler(eventoClick){
    // Recoger la información
    const textoNumeros = inputTexto.value
    console.log(textoNumeros)
    // Transformar a Array
    const arrayTexto = textoNumeros.split(",")
    const arrayNumeros = arrayTexto.map(function(numeroTexto){
        return Number(numeroTexto)
    })
    console.log(arrayNumeros)
    // Suma
    let suma = 0 
    arrayNumeros.map(function(numero){
        suma = suma + numero
    })
    console.log(suma)
    // Media
    const media = suma/arrayNumeros.length
    console.log(media)
    // // Mayor y menor
    // const arrayOrdenados = arrayNumeros.sort()
    // const Min = arrayOrdenados [0]
    // const Max = arrayOrdenados [arrayOrdenados.length-1]
    // console.log(arrayOrdenados)
    // console.log(Max)
    // console.log(Min)

    // Crear párrafos
    parrafoSuma = document.createElement('p')
    parrafoMedia = document.createElement('p')
    parrafoSuma.innerHTML = `La suma de los números es ${suma}`
    parrafoMedia.innerHTML = `La media de los números es ${media}`
    document.body.appendChild(parrafoSuma)
    document.body.appendChild(parrafoMedia)
}

// Funcionalidad Botón Reiniciar 

botonReiniciar.addEventListener('click', botonReiniciarHandler)

function botonReiniciarHandler(eventoClick){
    inputTexto.value = ''
    parrafoSuma.innerHTML = ''
    parrafoMedia.innerHTML = ''
}
