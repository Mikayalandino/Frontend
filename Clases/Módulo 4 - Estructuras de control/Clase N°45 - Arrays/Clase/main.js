// // innerHTML



// ESTO ESTA MAL
// for (let i = 0; i < productos.length; i++) {
//  carrito.innerHTML = `
//  <article class="producto">
//   <h3>${productos[i]}</h3>
//   <img src="http:www.placekitten.com/200">
// </article>
//  `
// }

// const productos = ["Nada", "Computadora", "Gatito", "Vino", "Vodka", "Auriculares", 
// "Porro", "Peluche", "Cerveza", "Teclado"]

// const carrito = document.querySelector(".carrito")

// let acc = ''

// for (let i = 0; i < productos.length; i++) {
//   acc = acc + `
//   <article class="producto">
//    <h3>${productos[i]}</h3>
//    <img src="http:www.placekitten.com/200">
//  </article>
//   `
//  }

//  carrito.innerHTML = acc



// const alumnasAnsiosas = ["Naty", "Caro", "Jenni", "Mika", "Chari", "Gabi", "Jose"]

// const lista = document.querySelector(".ansiosas")

// // lista.innerHTML = `<li>${alumnasAnsiosas[0]}</li>
// //                       <li>${alumnasAnsiosas[1]}</li>
// //                       <li>${alumnasAnsiosas[2]}</li>
// //                       <li>${alumnasAnsiosas[3]}</li>
// //                       <li>${alumnasAnsiosas[4]}</li>
// // `


// let nombres = ""
// for (let i = 0; i < alumnasAnsiosas.length; i++) {
//   nombres = nombres + `<li class="rojo">${alumnasAnsiosas[i]}</li>`
// }
// console.log(nombres)

// lista.innerHTML = nombres


// // let nombres = [2,3, 6, 8, 9]

// // let acc = 0
// // for (let i = 0; i < nombres.length; i++) {
// //   acc = acc + nombres[i]
  
// // }

// // console.log(acc)


// metodos de array
const nombres = ["Ana", "Elsa", "Sven", "Kristoff"]

// slice
// Retorna un nuevo array, desde la posicion que le paso en el primer parametro
// hasta la posicion del segundo (esa posicion NO se incluye)
// Si no paso un segundo parametro, sigue hasta el final del array
// No modifica el array original
// const nombresRecortados = nombres.slice(1, 3) 
// console.log(nombres)
// console.log(nombresRecortados)

// splice
// permite agregar y quitar elementos al array
// recibe tres parametros
// el primero es a partir de donde voy a agregar y/o quitar elementos
// el segundo es cuantos elementos quiero eliminar
// el tercero es el elemento que quiero agregar
// y puedo agregar optativamente un cuarto, un quinto, etc. 

// MODIFICA EL ARRAY EL ORIGINAL 

console.log(nombres)

nombres.splice(3, 1, "Olaf", "Mushu", "Zazu")

console.log(nombres)