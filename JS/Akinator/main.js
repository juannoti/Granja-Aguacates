
// Selecciono los botones
const numeroAdivinar = 67
const boton = document.getElementById('boton')
const inputNumero = document.getElementById("input-numero")
let parrafoResultado = " "

// Funcionalidad Botón 

boton.addEventListener('click', botonHandler)

function botonHandler(eventoClick){
    // Recoger la información
    const numero = inputNumero.value
    parrafoResultado.innerHTML = '' 
    if (numero > numeroAdivinar){
        inputNumero.value = ''
        parrafoResultado = document.createElement('p')
        parrafoResultado.innerHTML = 'Demasiado Alto'  
        document.body.appendChild(parrafoResultado)

    }
    
    else{

        if (numero < numeroAdivinar){
            inputNumero.value = ''
            parrafoResultado = document.createElement('p')
            parrafoResultado.innerHTML = 'Demasiado Bajo'  
            document.body.appendChild(parrafoResultado)

        }

        else{ 
            parrafoResultado = document.createElement('p')
            parrafoResultado.innerHTML = 'Ganaste'  
            document.body.appendChild(parrafoResultado)
        }

    }
    
}



