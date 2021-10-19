// const nombre = prompt("Cual es tu nombre?")


// const capitalizar = (palabra) => { 
//   return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
// }

// const comprar = document.querySelector("#comprar")
// const saludo = document.querySelector("#saludo")
// const nombrePerfil = document.querySelector("#nombre-perfil")
// const tituloProducto = document.querySelector("#titulo-producto")
// const tituloProducto2 = document.querySelector("#titulo-producto2")
// const tituloProducto3 = document.querySelector("#titulo-producto3")


// saludo.textContent = "Hola " + capitalizar(nombre)
// nombrePerfil.textContent = "Ir al perfil de " + capitalizar(nombre)

// comprar.onclick = () => {
//   alert("Estas segura, " + capitalizar(nombre) + ", de hacer esta compra?")
// }


// const producto1 = "iphone 11" 
// const producto2 = "mesa horrible con epoxy" 
// const producto3 = "peluca rosa" 

// tituloProducto.textContent = capitalizar(producto1)
// tituloProducto2.textContent = capitalizar(producto2)
// tituloProducto3.textContent = capitalizar(producto3)

// retornar y mostrar en consola son cosas distintas


// const sumar = ( num1 , num2 ) => { 
//   return num1 + num2
// }


// console.log( sumar(1, 1)  ) // 2
// // la ejecucion de una funcion es igual a lo que la funcion retorna


// addEventListener


const boton = document.querySelector("#boton")
const cuadrado = document.querySelector("#cuadrado")
const input = document.querySelector("#input")

// boton click


const alerta = () => {
  alert("hola")
} 

const crecerCuadrado = () => {
  cuadrado.style.width = "600px"
}

// no se puede asignar mas de una funcion al mismo evento del mismo elemento 
boton.onclick = alerta
boton.onclick = crecerCuadrado



boton.addEventListener("click", alerta)
boton.addEventListener("click", crecerCuadrado)

// en html tenemos etiquetas
// el navegador hace el DOM // 
// todo elemento del DOM es un objeto
// los objetos tienen propiedades y metodos 