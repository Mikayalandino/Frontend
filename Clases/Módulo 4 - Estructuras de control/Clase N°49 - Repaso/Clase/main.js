// el for sirve para dos cosas

// originalmente, sirve para contar
// para repetir codigo n cantidad de veces 

// const array = ["Plumito", "Rita", "Batman", "Chunchi", "Vodka"] // 5
// //                  0           1         2             3         4

// const mascotas = ["Gucci", "Pericles", "Jannis", "Gregoria"] // 4
// //                      0           1           2           3

// const gatos = ["Trufa", "Misha", "Rita"] // 3 gatos.length
                  // 0        1         2
// quedarme con un array que tenga los dos ultimos elementos de cualquier array

// gatos // esto es un array
// mascotas[0] esto es un elemento dentro del array ("Gucci")
// array.length - 2 esto es un numero que representa una posicion dentro del array (3)
// array[array.length - 2] // esto es un elemento dentro del array ("Chunchi")


//  console.log(gatos) /// ["Trufa", "Misha", "Rita"]
//  console.log(gatos[2]) // Rita
//  console.log(mascotas[2]) // Jannis 
//  console.log(mascotas.length) // 4
//  console.log(array[4]) // Vodka
//  console.log(array[mascotas.length]) // Vodka  // esto es medio trampa pero lo tienen que entender
 





// const recortarArray = (array) => {
//   console.log(array.slice(array.length - 2))
// }

// recortarArray(array)
// recortarArray(mascotas)
// recortarArray(gatos)



// la longitud del array es un numero
// mascotas.length // 4 

// // console.log(4 - 1)
// console.log(mascotas.length - 1) 

// array[0] // Plumito
// mascotas[0] // Gucci

// con ese numero podemos encontrar elementos 
// // ultimo elemento dentro de un array
// array[array.length - 1] // Vodka

// // penultimo
// array[array.length - 2] // Chunchi
// mascotas[mascotas.length - 2] // Jannis




// const gatos = ["Trufa", "Misha", "Rita"] // 3 gatos.length

// for (let i = 0; i < gatos.length; i++) {
//   // console.log("empieza el for", i)
//   // console.log(i)
//   console.log(gatos[i])
//   // console.log("termina el for", i)
// }


// el for sirve para contar 

// voy a empezar a contar desde 0
// voy a contar mientras i sea menor a 10 
// y en cada vuelta le voy a sumar 1 a i 
// "hola" 3 
// ["hola", "hola", "hola"]


// const crearArray = (cantidad, valor) => {
// const resultado = []
// // repetir la orden push 3 veces 
//   for (let i = 0; i < cantidad; i++) {
//     resultado.push(valor)
//   }
//   return resultado
// }

// console.log(crearArray(3, "hola"))
// console.log(crearArray(18, "chau"))
// console.log(crearArray(5, "cacapis"))


// empeza a contar desde cero
// conta mientras no llegues al 10 
// conta de uno en uno

// let numero = 1
// // no cambia el valor de numero
// console.log(numero + 1) // 2
// console.log(numero) // 1

// // el nuevo valor de numero va a ser igual al valor anterior de numero + 1
// numero = numero + 1
// console.log(numero) // 2

// numero++ // es una manera resumida de decir numero = numero + 1
// console.log(numero) // 3

// numero++
// console.log(numero) // 4

// numero = numero + 2
// // es equivalente a numero+=2 
// console.log(numero) // 6

// numero = numero + 3
// numero+=3

// numero+=4

// numero+=5 
                  
// for (let i = 0; i < 10; i++) {
//   // 0 hasta 3 (no inclusive)
//   // cuenta 3 veces
//   // el codigo que esta aca se va a ejecutar 3 veces
//   console.log("hola") 
// }

// cuando lo usamos:
// hacer algo n cantidad de veces ---> for y una condicion con un numero
// repetir algo con modificaciones --> for y una condicion con un numero

// por ejemplo, dibujar esta piramide en la consola con numerales
// // #
// // ##
// // ###
// // ####
// // #####

// let acc = "#"
// for (let i = 0; i < 5; i++) {
//   console.log(acc)
//   acc = acc + "#" 
// }


// 13 
// // la suma de todos los impares desde 1 hasta 13 inclusive
// let resultado = 0
// resultado + 1 // 1 
// resultado + 3 // 4
// resultado + 5 // 9
// resultado + 7 // 16
// resultado + 9 // 25
// resultado + 11 // 36
// resultado + 13 // 49

// const gatos = ["Vodka", "Plumito", "Trufa", "Mia"]  // 4
// gatos.length // 4
// console.log(gatos[0].toUpperCase())
// console.log(gatos[1].toUpperCase())
// console.log(gatos[2].toUpperCase())
// console.log(gatos[3].toUpperCase())


// for (let i = 0; i < gatos.length ; i++) {

//   // console.log("la i vale", i)
//   // console.log("gatos[i]", gatos[i])

//   console.log(gatos[i].toUpperCase())
// }


// crear un array a partir de otro, por ej:
// modificar todos los elementos de un array
// filtrar los elementos de un array por una condicion 

const gatos = ["Vodka", "Plumito", "Trufa", "Mia"]  // 4

// crear un array que contenga toods los animales que tengan 5 letras o menos 
let nombre = "Candela"
nombre.length // 7

const filtrarMenoresA5 = (array) => {
  let nuevoArray = []
  for (let i = 0; i < array.length; i++) {
    if (gatos[i].length <= 5) {
      nuevoArray.push(gatos[i])
    }
  }
  return nuevoArray
}
console.log(filtrarMenoresA5(gatos))

// const capitalizarArray = (array) => {
//   let nuevoArray = []

//   for (let i = 0; i < array.length; i++) {
//     nuevoArray.push(array[i].toUpperCase())
    
//   }
//   return nuevoArray
// }


// console.log(capitalizarArray(gatos))