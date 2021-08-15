// propiedades y funciones nativas de strings y numeros 

// DOCUMENT OBJECT MODEL

// o MODELO DE OBJECTOS DEL DOCUMENTO 

// seleccionar por Id
// const parrafo = document.getElementById("primer-parrafo")
// const segundoParrafo = document.getElementById("segundo-parrafo")

// console.log(parrafo)
// console.log(segundoParrafo)

 // seleccionar con querySelector (selector de css)
// const titulo = document.querySelector("h1")
// const primerParrafo = document.querySelector("#primer-parrafo")
// const tituloHijoDeContenedor = document.querySelector(".contenedor > h1")

// PROPIEDAD TEXT CONTENT
// const rojo = document.querySelector(".rojo")
 
// console.log(rojo.textContent)

// rojo.textContent = "Juntada de programadoras en la casa de Tati saludando a sus vecinos"


// EJEMPLO

// const nombre = prompt("Por favor, indique su nombre")

// const titulo = document.querySelector(".verde")

// titulo.textContent = `Hola ${nombre}, bienvenide a DOM`



// CLASES 

// const parrafo = document.getElementById("primer-parrafo")

// console.log(parrafo)

// // ver las clases
// console.log(parrafo.classList)

// // agregar una clase
// parrafo.classList.add("subrayado")

// // quitar una clase
// parrafo.classList.remove("rojo")

// // ejemplo de uso
// const color = prompt("Elija un color: rojo, azul, verde o naranja")

// const titulo = document.querySelector("h1")

// titulo.classList.add(color)


// modificar estilos directamente 

// const parrafo = document.querySelector("#primer-parrafo")

// // ver los estilos
// console.log(parrafo.style)

// // modificar los estilos

// parrafo.style.color = "purple"
// parrafo.style.backgroundColor = "violet"
// parrafo.style.textDecoration = "underline"
// parrafo.style.fontSize = "50px"


// const modoOscuro = prompt("Responda SI si quiere modo oscuro, NO si quiere modo habitual")

// const titulo = document.querySelector("h1")
// const parrafo = document.querySelector("p")
// const body = document.querySelector("body")

// if (modoOscuro === "SI") {
//   titulo.style.color = "white"
//   parrafo.style.color = "white"
//   body.style.backgroundColor = "black"
// }


// modificar atributos 

// const imagen = document.getElementById("imagen")

// console.log(imagen)

// // ver el atributo src
// console.log(imagen.src) 

// // modificar el atributo src
// imagen.src = "https://random-sailor-img.herokuapp.com/"


// // const imagenDelUsuario = prompt("Agrega la URL de una imagen")

// // imagen.src = imagenDelUsuario

// const direccionWeb = prompt("Agrega un link a la pagina que quieras")

// const link = document.getElementById("link")

// link.href = direccionWeb
 

// // 9 y 10 NO LOS HAGAN 

// // data



// const obtenerExtension = (archivo) => {
 
//   const posicionDelPunto = archivo.indexOf(".") + 1
//   return archivo.slice(posicionDelPunto)
  
// }

// console.log(obtenerExtension('imagen.png'))

//  console.log(obtenerExtension('index.html'))

// console.log(obtenerExtension('notas.txt'))

// Definí una función sonIguales que reciba como 
// argumentos dos strings a y b y retorne si ambos strings
//  tienen el mismo contenido independientes de las mayusculas.

console.log( sonIguales('javascript', 'JavaScript'))

console.log(sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO'))


const str = "javascript"
const srt2 = "JavaScript"

const stringaMinusculas = str.toLowerCase()  // javascript 
const string2aMinusculas = str2.toLowerCase()  // javascript 

stringaMinusculas === string2aMinusculas // true


const sonIguales = (a, b) => {
  
}