// // tomar solo los elementos pares/impares de un array

// // sumar todos los numeros pares/impares de cierta cantidad de numeros

// mostrar en consola solo los elementos impares de este array
// const nombres = ["Caro", "Ivi", "Jenni", "Carola", "Brenda"]
//                   //  0       1       2         3           4
// const mostrarImparesEnConsola = (array) => {
//   for (let i = 1; i < array.length; i+=2) {
//     console.log('i', i)
//     console.log('array[i]', array[i])
//     console.log(array[i])
//   }
// }

// // mostrarImparesEnConsola(nombres)

// // mostrar en consola los numeros impares del 10 al 20

// const mostrarNumerosEnConsola = () => {
//   for (let i = 11; i <= 20; i+=2) {
//     console.log('i', i)

    
//   }
// }
// mostrarNumerosEnConsola()

// otra manera de recorrer un array desde el final hasta el comienzo:
//                    0       1         2         3           4
// const nombres = ["Caro", "Ivi", "Jenni", "Carola", "Brenda"]

// console.log(nombres)



// for (let i = nombres.length - 1; i >= 0; i-=2) {
//   console.log(i)
//   console.log(nombres[i])
// }
 
// una funcion que recibe x parametros y retorna z cosa 

// const nombre = "Naty"

// nombre = "Stefi"

// console.log(nombre)


// const multiplicar = (numero, array) => {

//   const resultado = []

//   for (let i = 0; i < array.length; i++) {
//     resultado.push(array[i] * numero)
//   }
//   // retorna un array
//   return resultado 
// }



// console.log(multiplicar(2, [1, 3, 5]))
// // [2, 6, 10]

// console.log(multiplicar(2, [2, 4, 6]))
// // [4, 8, 12]

// console.log(multiplicar(9, [9, 77, 45, 66]))




// // Definí una función multiplicar2 que reciba como argumentos un número 
// // multiplicador y un array de números numeros, y que devuelva un numero 
// // compuesto por la multiplicacion de cada elemento del array por multiplicador 

// esto es solo para mostrar dos estrategias distintas con la variable numerica y con array
// const multiplicar2 = (numero, array) => {
//   // recorrer el array
//   // multiplicar cada numero del array por dos
//   // sumar cada numero del array modificado entre si 
//     const arrayResultado = []
//     for (let i = 0; i < array.length; i++) {
//       arrayResultado.push(array[i] * numero)
//     }

//     let resultado = 0
//     for (let i = 0; i < arrayResultado.length; i++) {
//       // console.log("i", i)
//       // console.log("array[i]", arrayResultado[i])
//       // console.log("resultado", resultado)
//       resultado = resultado + arrayResultado[i]
//     // console.log(resultado)
//     }
//   return resultado
// }


// esta seria una solucion mas clara: (hecha por Caro Almaraz)
// const multiplicar2 = (numero, array) =>{
//   let resultado = 0;

//   for (let i = 0; i < array.length; i++) {
//     resultado = resultado + numero * array[i]
//   }
//   return resultado
// };

// console.log(multiplicar2(2, [1, 3, 5]))
// // [2, 6, 10]
// // 18

// console.log(multiplicar2(2, [2, 4, 6]))
// // 24

// console.log(multiplicar2(9, [9, 77, 45, 66]))
// // 1773



// recibo un array como parametro y debo retornar un array
// [1, 55, 3, 99 ] --> [55, 99] // filtrar

// [1, 55, 3, 99 ] --> [2, 110, 6, 198]
// [1, 55, 3, 99 ] --> ["1", "55", "3", "99" ]

// filtrar:
// const funcion  = (array) => {
//   const resultado = []
//   for (let i = 0; i < array.length; i++) {
//       if (array[i] > 18) {
//         resultado.push(array[i])
//       }
//   }
//   return resultado
// }

// modificar todos los elementos:
// ejemplo: mutiplicar cada numero por dos y convertirlo a un string
// const funcion  = (array) => {
//   const resultado = []

//   for (let i = 0; i < array.length; i++) {
//     // modificar el elemento
//     // hacerle push al array nuevo
//     const multiplicadoPorDos = array[i] * 2
//     const convertidoAString = String(multiplicadoPorDos)
//     resultado.push(convertidoAString)
    
//   }
//   return resultado
// }

// recibo un array como parametro y debo retornar un numero

// [1, 2, 3] --> la suma de todos los numeros
// [2, 3, 4] --> el mas grande de todos los numeros


// [97897, 96674, 90798]
// sumar toos los numeros en un array
// const funcion = (array) => {
//   let resultado = 0
//   for (let i = 0; i < array.length; i++) {
//     resultado = resultado + array[i]
    
//   }
//   return resultado
// }


// encontrar el numero mas chico de un array

// const encontrarMasChico = (array) => {
//   let resultado = array[0]
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
//     console.log('resultado 1', resultado)
//     if (array[i] < resultado) {
//       resultado = array[i]
//     }
//     console.log('resultado 2', resultado)
//   }
//   return resultado
// }


// console.log(encontrarMasChico([5, 80, 96674, 1, 90798, 97897, ]))


// const encontrarPalabraMasLarga = (array) => {
//   let resultado = array[0]
//   console.log(array, resultado)

//   for (let i = 0; i < array.length; i++) {
//     if (resultado.length < array[i].length) {
//       resultado = array[i]
//     }
//     console.log(resultado)
//   }
//   return resultado
// }

// console.log(encontrarPalabraMasLarga(["pancho", "berenjena", "salchicha", "pepino"]))





// fijarme los elementos que estan al lado de otro

// const numeros = [1, 1, 6, 8, 5, 9, 9, 3]
// let resultado = []

// for (let i = 0; i < numeros.length; i++) {
//   console.log("----")
//   console.log(numeros[i], numeros[i + 2])
//   console.log("----")
// }





// comparar dos arrays entre si 

// const alumnas  = ["Cande", "Gaby", "Caro" ]
// const alumnas2  = ["Cande", "Gaby", "Caro"]


// const compararArrays = (array1, array2) => {
//   let sonIguales = false

//   for (let i = 0; i < array1.length; i++) {
//     console.log(array1[i], array2[i])
//     array1[i] === array2[i]
    
//   }

//   return sonIguales
// }

// console.log(compararArrays(alumnas, alumnas2))
