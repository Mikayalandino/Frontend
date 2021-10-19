// const persona = {
//   nombre: "fantasMEADA", 
//   nombreReal: "Sofia Garcia", 
//   ocupacion: "abogada", 
//   edad: 22, 
//   tieneSesionIniciada: false
// }

// persona.nombre // fantasMEADA
// persona.edad // 22 

// // para guardar en local storage 
// // 1. un objeto de javascript
// // 2. convertirlo a JSON 
// // 3. guardarlo en localstorage 

// // no modifica el dato original
// // retorna un JSON a partir del nuevo dato 
// const personaConvertidaAJSON = JSON.stringify(persona)
// localStorage.setItem("persona", personaConvertidaAJSON)


// // para saludar a la persona guardada
// // tengo que leer desde local storage 

// // 1. tomar lo que esta guardado en local storage (como json)
// // 2. convertirlo a un objeto de javascript 


// const personaAJSON = localStorage.getItem("persona")

// // comvierte de json a javascript
// const objetoAPartirDeJSON = JSON.parse(personaAJSON)

// console.log(personaAJSON)
// console.log(objetoAPartirDeJSON)

// const titulo = document.querySelector("#titulo")

// titulo.textContent = `Hola ${objetoAPartirDeJSON.nombre}`



// si el local storage tiene la sesion iniciada, 
// mostramos el boton cerrar sesion

// si no, 
// mostramos el boton iniciar sesion

// si el usuario hace click en cerrar sesion, 
// guardamos en local storage que la sesion NO esta iniciada
// y mostramos el boton iniciar sesion

// si el usuario hace click en iniciar sesion
// guardamos en local storage que la sesion SI esta iniciada
// // y mostramos el boton cerrar sesion 

// const botonCerrarSesion = document.querySelector("#cerrar-sesion")
// const botonIniciarSesion = document.querySelector("#iniciar-sesion")

// const datosDeLocalStorageJSON = localStorage.getItem("persona")
// const datosDeLocalStorage = JSON.parse(datosDeLocalStorageJSON)

// console.log(datosDeLocalStorage)

// if (datosDeLocalStorage.tieneSesionIniciada === true) {
//   botonCerrarSesion.style.display = "block"
//   botonIniciarSesion.style.display = "none"
// }
// else {
//   botonCerrarSesion.style.display = "none"
//   botonIniciarSesion.style.display = "block"
// }



// metodos avanzados de array 

const alumnas = ["Naty", "Yani", "Gabi", "Eli"]
const edades = [22, 34, 55, 64, 29, 88]

const multiplicar = (elemento) => {
  return elemento * 2
}
// map 
// recorre un array
// ejecuta una funcion por cada elemento del array 
// la funcion va a recibir como parametro 
// cada uno de los elementos del array

// map retorna un array nuevo 
// a partir de las cosas que se retornan en la funcion 

const nuevoArray = alumnas.map((elemento) => {
  return elemento.toUpperCase()
})

const alumnasConSignoAlFinal = alumnas.map((elemento) => {
  return elemento + "!"
})

const arrayMultiplicado = edades.map(multiplicar)


console.log(nuevoArray)
console.log(arrayMultiplicado)
