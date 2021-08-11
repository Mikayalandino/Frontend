// let edad = 34

// // dos maneras distintas de escribir la misma orden
// edad = edad + 1 // 35
// edad++ // 36


// console.log(edad) 

// edad = edad + 2 // 38
// edad += 2  // 40

// console.log(edad)


// edad += 9

// console.log(edad)

// edad += 10

// console.log(edad)



// CICLOS FOR, CICLOS DE REPETICION 



// que es contar 

// - comienzo por un numero
// - determino hasta cuanto voy a contar
// - al numero original le voy sumando un numero cada vez 

// 0 
//   0 + 1 = 1
//      1 + 1 = 2
//        2 + 1 = 3


// operacion de repeticion

// "conta mientras i sea menor o igual a 10"

// for (let i = 0; i <= 100; i+=2) {
//   console.log(i)
// }


// escribir un codigo que use for que muestre en consola todos los numeros pares del 0 al 100
// escribir un codigo con for que muestre en consola todos los numeros del 1000 al 1 
// escribir un codigo que use for que empiece en 100 y vaya decreciendo de 3 en 3 hasta llegar al 1



// arrays o arreglos

// const alumnas = [ "naty", "tati", "ro", "ele" ] 

// const contenedorAlumnas = document.querySelector(".alumnas")



// // console.log(alumnas)
// // console.log( alumnas[0] ) // "naty"
// // const nombre = alumnas[2]
// // console.log(nombre)

// const resultado = document.querySelectorAll(".alumnas")

// contenedorAlumnas.onclick = () => {
//   console.log("me hiciste click")
// }

// console.log(resultado)

// resultado.onclick = () => {
//   console.log("hiciste click en un elemento de la lista")
// }

// document.getElementsByClassName("alumnas") 



// const titulo = document.getElementById("titulo")

const subtitulo = document.querySelector("#subtitulo")
const parrafos = document.querySelectorAll(".parrafo")
console.log(parrafos)
console.log(parrafos[0])

parrafos.onclick = () => { // esto no funciona
  console.log("click en un parrafo")
}

// parrafos[0].onclick = () => {
//   parrafos[0].style.color = "green"
// }

// parrafos[1].onclick = () => {
//   parrafos[1].style.color = "green"
// }

for (let i = 0; i < 8; i++) {
  parrafos[i].onclick = () => {
    parrafos[i].style.color = "green"
  }
}

subtitulo.onclick = () => {
  subtitulo.style.color = "red"
}


const alumnas = [ "Jenni", "Zuri", "Ivi", "Sandra", "Elena"]

const variable = 0
console.log( alumnas[variable] )
console.log(alumnas[1])
console.log(alumnas[2])
console.log(alumnas[3])
console.log(alumnas[4])

for (let i = 1; i < 10; i++) {  
  console.log(i)
  console.log(alumnas[i])
}