console.log('Hola desde el otro lado')

let cocheAzul = 'Coche Azul'

cocheAzul = 'Coche Verde'

console.log (cocheAzul)

const volumen = 16*23*13

console.log(volumen)

const hobbies = ['Cromos', 'Cine', 'Deportes', 'Musicales', 'Coches']
console.log (hobbies [1])
hobbies.push('Karaoke')
console.log (hobbies [5])


//Condicionales

const numeroPeces = 5

if (numeroPeces <= 4) {
    console.log(`Tienes ${numeroPeces} que son menos de 4 peces`)
}


//Ejercicio 1 

const numero1 = -5
const numero2 = -2

if (numero1 > numero2) {
    console.log(numero1+numero2)
}

if (numero2 < 0 ) {
    console.log(numero2*3)
    }


if (numero1+1 < numero2){
    console.log(numero2-numero1)
    }

//Ejercicio 2 

const anio = 2028

if (anio % 4 != 0) {
    console.log("No es Bisiesto")
}

else{
    if (anio % 100 != 0){
       console.log("Es Bisiesto")
    }
    else{
        if (anio % 400 != 0){
            console.log("No es Bisiesto")
        }
        else{
            console.log("Es Bisiesto")}  
    }
}

//Ejercicio 3 

const num1 = 10
const num2 = 101

if (Math.abs(100-num1) < Math.abs(100-num2)) {
    console.log(num1 + " es más próximo a 100")
}
else{
    console.log(num2 + " es más próximo a 100")
}

//Ejercicio 4 

const DNI = prompt("Introduzca su DNI sin letra")
const letra = DNI%23
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
if (DNI == 0 || DNI > 99999999) {
    alert('El DNI no es válido, lerdo.')
}
else{
    alert('Su DNI es '+ DNI + letras[letra])
}

//Ejercicio 5 (Bucles)

for (let contador = 0; contador < 6; contador = contador+1){

    console.log(`Estoy en la iteración número ${contador+1}`)
}

//Ejercicio 6 (Bucles for of)

const semana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']

for (const dia of semana)
    console.log(dia)

for (const posicionDia in semana)
    console.log(posicionDia)

//Ejercicio 7 

const palabras = ['Letra', 'Palabra', 'Cabeza', 'No', 'Transformador', 'Intransigencia']
let palabraMasLarga

for (const palabra of palabras){
    if(palabraMasLarga){

        if(palabraMasLarga.length < palabra.length){
            palabraMasLarga = palabra
        }

    } else{
        palabraMasLarga = palabra
    }
}

console.log(palabraMasLarga)

//Ejercicio 8

const numeroFact = prompt("Introduzca un número")
let potencial = 1
for (let contador = 1; contador<=numeroFact; contador++){
    potencial = potencial*contador
}

console.log(potencial)


