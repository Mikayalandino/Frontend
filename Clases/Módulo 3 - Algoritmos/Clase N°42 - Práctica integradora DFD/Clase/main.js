// const nombres = ["Cande", "Eli", "Micky", "Sandra", "Caro"]

// // console.log(nombres[0]) // Cande 
// // console.log(nombres[1]) // Eli
// // console.log(nombres[2]) // Micky 
// // console.log(nombres[3]) // Sandra
// // nombres.length // 5
// // console.log(nombres.length)

// for (let i = 0; i < nombres.length; i++) {
//   console.log("hola chicas")  
//   console.log(i)
//   console.log(nombres[i])
// }



// Dado un array de 10 números, retornar un numero que 
// represente cuantos de ellos son positivos.

const numeros  = [1, 2, -8, -3, 5, 1, 9, -12, -99, -5, 6, 3, 2, -99, -5, 77, 6, 44, 87, 66]
const masNumeros  = [99,44, -66, -11, 43, -20, 90]

const cantidadDePositivos = (array) => {
  let cantidadDeNumerosPositivos = 0 
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      cantidadDeNumerosPositivos++
    } 
  }
  return cantidadDeNumerosPositivos
}


console.log(cantidadDePositivos(numeros))
console.log(cantidadDePositivos(masNumeros))
console.log(cantidadDePositivos([-1, -1, -1, -2, -4, -2, -6]))
console.log(cantidadDePositivos([-1, 1, -1, 2, -4, 2, -6]))