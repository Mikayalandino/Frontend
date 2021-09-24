// const boton = document.querySelector("#boton-cargar")

// boton.onclick = () => {
//   boton.classList.add("is-loading")
// }


const botonModal = document.querySelector("#boton-modal")
const modal = document.querySelector(".modal")
const botonCerrarModal = document.querySelector(".delete")

botonModal.onclick = () => {
  modal.classList.add("is-active")
}

botonCerrarModal.onclick = () => {
  modal.classList.remove("is-active")
}