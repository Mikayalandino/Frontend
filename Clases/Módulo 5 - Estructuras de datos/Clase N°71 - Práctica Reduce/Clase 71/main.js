// map
// filter
// sort
// find
// every
// some

// acumuladora:
// a partir de un array de javascript
// quiero quedarme con UN SOLO VALOR
// y ese valor NO es un elemento del array original

// // // suma de todos los numeros dle array
// // const numeros = [2, 7, 60]
// // let acc = 0
// // for (let i = 0; i < numeros.length; i++) {
// //  acc = acc + numeros[i]
// //  console.log(acc)
// // }
// // // console.log(acc)

// // concatenacion de todos los strings
// // const nombres = ["gri", "ele", "tati", "agus"]
// // let acc = ""
// // for (let i = 0; i < nombres.length; i++) {
// //   acc = acc + nombres[i]
// // }
// // console.log(acc)

// const nombres = ["gri", "ele", "tati", "agus"]

// const objetos = [
//   {
//     nombre: "Gri",
//     edad: 22,
//     email: "mail@gmail.com"
//   },
//   {
//     nombre: "Agus",
//     edad: 22,
//     email: "mail@gmail.com"
//   }

// ]

// // variable = variable + 2
// // variable += 2

// let acc = ""
// for (let i = 0; i < objetos.length; i++) {
//   acc +=  "<li>" + objetos[i].nombre + "</li>"

// }
// console.log(acc)

// // la propiedad innerHTML recibe un STRING

const lista = document.querySelector('#nombres');

// lista.innerHTML = acc

// REDUCE

// const nombres = ["naty", "caro", "roci", "mika"]

// reduce recibe dos parametros:
// una funcion,
// y un valor inicial para la acumuladora
// la funcion, a su vez, recibe dos parametros:
// el valor de la acc y cada elemento del array

// const resultado = nombres.reduce((acc, elemento, i) => {
//   // vamos a recibir cada elemento del array
//   // lo vamos a modificar como queremos
//   // y vamos a retornar algo
//   // lo que retornemos es el nuevo valor de la acumuladora
//   console.log("-----")
//   console.log("estamos en la vuelta", i)
//   console.log("acc", acc)
//   console.log("elem", elemento)
//   console.log("retorno", acc + elemento)
//   return acc + elemento
// }, "")

// console.log(resultado)
// console.log(nombres)

// const nombres = ["gri", "ele", "tati", "agus"]
// let acc = "" // valor inicial
// for (let i = 0; i < nombres.length; i++) {
//   acc = acc + nombres[i]  // modificamos el valor de la acc
// }
// console.log(acc)

// const numeros = [10, 5, 10]

// // la suma de todos los elementos
// const resultado = numeros.reduce((acc, elemento) => {
//   return acc + elemento
// }, 0)

// // el promedio de todos los numeros
// const promedio = numeros.reduce((acc, elemento) => {
//   return acc + (elemento / numeros.length)
// }, 0)

// const nombres = ["gri", "ele", "tati", "agus"]

// const html = nombres.reduce((acc, elemento) => {
//   return acc + "<li>" + elemento + "</li>"
//   // return acc + `<li>${elemento}</li>`
// }, "")

// lista.innerHTML = "<ul>" +  html + "</ul>"

// const numeros = [
//   { nombre: 'Yani', edad: 22 },
//   { nombre: 'Gri', edad: 25 },
//   { nombre: 'Ele', edad: 24 },
// ];

// // la suma de todos los elementos
// const resultado = numeros.reduce((acc, elemento) => {
//   return acc + elemento.edad;
// }, 0);

// console.log(resultado);


// const operaciones = [
//   {
//     tipo: "gasto", 
//     monto: 100
//   }, 
//   {
//     tipo: "ganancia",
//     monto: 200 
//   }, 
//   {
//     tipo: "gasto", 
//     monto: 50
//   }
// ]

// const gastos = operaciones.filter((elemento) => {
//   return elemento.tipo === "gasto"
// })

// const ganancias = operaciones.filter((elemento) => {
//   return elemento.tipo === "ganancia"
// })

// const sumaGastos = gastos.reduce((acc, elemento) => {
//   return acc + elemento.monto
// }, 0)
// console.log(gastos)
// console.log(sumaGastos)

// quedarme con los gastos
// sumar entre si

// quedarme con las ganancias
// sumar los montos entre si




// // el valor inicial de la acc es optativo

// const numeros = [10, 5, 10]

// // la suma de todos los elementos
// const resultado = numeros.reduce((acc, elemento, index, array) => {
//   return acc + elemento
// })

// console.log(resultado)



const playlistDos = ['Smells Like Teen Spirit', 'Everlong', 
'Come As You Are', 'The Pretender', 'Heart-Shaped Box', 
'Learn to Fly', 'Lithium'];
const playlistEscuchada = ['The Pretender', 'Lithium', 'Come As You Are']

const playlistSinEscuchar = playlistDos.filter((elemento) =>{
  return !playlistEscuchada.includes(elemento)
});


// retornamos una condicion
// los elementos que cumplen esa condicion, van al array nuevo 
