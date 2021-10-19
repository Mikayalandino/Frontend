// arrays o arreglos

// const alumnas = ["gabi", "ELI", "sTeLLa", "Vicky"]

// console.log(alumnas.length) // 4

// va a empezar en 0
// va a contar mientras i sea menor a 4
// va a contar de uno en uno
// for (let index = 0; index < alumnas.length; index++) {
//   // const element = array[index];
  
//   const nombre = alumnas[index] 
//   const primeraLetra = nombre.charAt(0)
//   const restoDelNombre = nombre.slice(1)
//   const nombreCompleto = primeraLetra.toUpperCase() + restoDelNombre.toLowerCase()

//   console.log(nombreCompleto)
// }



// Contar todos los elementos mayores a 18

// una variable en donde ir guardando todos los elementos que sean > 18


// si copien este codigo, si funciona :D 
// const edades = [2, 3, 7, 3, 1, 8, 3, 7, 3]

// let contador = 0
// for (let index = 0; index < edades.length; index++) {

//   if (edades[index] > 18) {
//     contador++
//   }

// }

// console.log("contador", contador)


// quiero una funcion mayoresA18
// que reciba un array y retorne la cantidad de elementos > 18 en ese array

// quiero una funcion hayMayorA18
// que reciba un array y retorne true si hay al menos un elemento > 18
// y false si no lo hay

// const mayoresA18 = (array) => {
//   let contador = 0
//   for (let index = 0; index < array.length; index++) {
//     if (array[index] > 18) {
//       contador++      
//     }
//   }
  
//   return contador
// }

// const hayMayorA18 = (array) => {
//   let hayMayoresDe18 = false // variable bandera o "flag" o "javascript, levanta la mano"

//    for (let index = 0; index < array.length; index++) {
//      if (array[index] > 18) {
//       hayMayoresDe18 = true
//      }  
//    }
   
//    return hayMayoresDe18
// }

// const edades = [5, 88, 3] // TRUE 


// const numeros = [22, 33, 1, 99]
// const menores = [2, 4, 6, 1, 3, 1]

// console.log(mayoresA18(edades))

// console.log(mayoresA18(numeros))
