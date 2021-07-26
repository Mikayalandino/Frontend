// const boton = document.getElementById("haceme-click")
// const imagen = document.querySelector("img")


// const saludar = () => {
//   console.log("hola")
//   imagen.src = "https://random-sailor-img.herokuapp.com/"
// }

// console.dir(boton)

// boton.onclick = saludar

// const like = document.getElementById("corazon")
// const gatito = document.getElementById("imagen")
// const cantidadDeLikes = document.getElementById("cantidad-de-likes")

// const convertirARojo = () => {
//   // quitar un like
//   if (like.style.color === "rgb(255, 0, 0)") {
//     like.style.color = "#000000"
//     cantidadDeLikes.textContent = "0"
//   }
//   // agregar un like
//   else {
//     like.style.color = "#FF0000"
//     cantidadDeLikes.textContent = "1.000.000"
//   }
// }

// gatito.onclick = convertirARojo 


/* const modal = document.getElementById("modal")
const botonDeAbrirModal = document.getElementById("abrir-modal")
const botonDeCerrarModal = document.getElementById("cerrar-modal")

const mostrarModal = () => {
  modal.style.display = "block"
}

const cerrarModal = () => {
  modal.style.display = "none"
}

botonDeAbrirModal.onclick = mostrarModal

botonDeCerrarModal.onclick = cerrarModal */

 const modal = document.getElementById("modal")
const botonDeAbrirModal = document.getElementById("abrir-modal")
const botonDeCerrarModal = document.getElementById("cerrar-modal")

const mostrarModal = () => {
  modal.classList.add("ocultar")
}

const cerrarModal = () => {
  modal.classList.add("ocultar")
}

botonDeAbrirModal.onclick = mostrarModal

botonDeCerrarModal.onclick = cerrarModal 

