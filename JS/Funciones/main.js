// Funciones

function holaMundo(){
   console.log('Hola Mundo')
   return 'Hola Mundo'
}

const salidaFuncion = holaMundo()
console.log(salidaFuncion)


function sumaNumeros(numero1, numero2){
    const suma = numero1+numero2
    return suma
}

console.log(sumaNumeros(2,3))

// Método .map

const arrayNumeros = [2,3,4,5,6,7,8,9]

const resultadoOperacion =arrayNumeros.map(function(numero, posicion){
    const multiplicación = numero*2
    return multiplicación
})

console.log(resultadoOperacion)

//Funciones tipo flecha

function sumaUno(parametro){
    return parametro+1
}

const sumaDos = (numero) => {
    return numero + 2
}

const suma3 = sumaDos(3)

//Ejercicio 1

function concat(palabra1, palabra2){
    const porcion1 = palabra1.substring(1)
    const porcion2 = palabra2.substring(1)
    return porcion1.concat(porcion2)

}

console.log(concat("Raton","Queso"))

//Ejercicio 2
function invertir(palabra){
    const letras = palabra.split('')
    const sartel = letras.reverse()
    const inversa = sartel.join('')
    return inversa

}

console.log(invertir("Raton"))

//Ejercicio 3
function cuantasVocales(palabraVocales){
    const vocales = "aáeéiíoóuúüu";
    let cantidadVocales = 0;
    for (const letra of palabraVocales) {
        if (vocales.includes(letra.toLowerCase())) {
            cantidadVocales++;
        }
    }
    return cantidadVocales; 
}

console.log(cuantasVocales("Paragüero"))

