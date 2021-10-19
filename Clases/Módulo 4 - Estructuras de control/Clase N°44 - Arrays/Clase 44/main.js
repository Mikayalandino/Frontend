// // querySelector
// const convertirAAzul = document.querySelector("#convertirAAzul")
// const principal = document.querySelector(".principal")

// const card = document.querySelector(".card")
// // siempre trae uno, aunque haya varios elementos que cumplen la condicion 
// console.log("querySelector", card)

// card.style.backgroundColor = "blue"
// card.style.color = "white"
// card.textContent = "hola chicas"




// // querySelectorAll
// // siempre trae una lista de elementos (un array)
// const principales = document.querySelectorAll(".principal")
// const cards = document.querySelectorAll(".card")


// for (let i = 0; i < cards.length; i++) {
//   cards[i].style.backgroundColor = "green"
// }

// console.log(principales)

// console.log("querySelectorAll", cards)
// // cards.style.backgroundColor = "blue" // NO FUNCIONA


// convertirAAzul.onclick = () => {
//   // que todas las cajas se vuelvan azules
//   for (let i = 0; i < cards.length; i++) {
//     cards[i].style.backgroundColor = "blue"
//   }
// }

// es equivalente a:
// convertirAAzul.addEventListener("click", () => {
//     // que todas las cajas se vuelvan azules
//     for (let i = 0; i < cards.length; i++) {
//       cards[i].style.backgroundColor = "blue"
//     }
//   }
// )


// cards
// NO LO PUEDO HACER
// no le puedo asignar funciones a listas
// cards.onclick = () => {
//   console.log("hola")
// }

// for (let i = 0; i < cards.length; i++) {
//  cards[i].onclick = () => {  
//    console.log("hiciste click")
//    cards[i].style.width = "250px"
//    cards[i].style.height = "250px"
//  }
// }


// HTML
// Seis divs con forma de tarjeta - seleccionarlos con querySelectorAll

// Un boton, que al hacerle click haga que en todos los divs aparezca la frase "Hola chicas"

// Al hacerle click a cada tarjeta que esa tarjeta cambie su color de fondo. 


// const tarjetas = document.querySelectorAll(".card")
// const boton = document.querySelector("#convertirAAzul")

// boton.onclick = () => {
//   for (let i = 0; i < tarjetas.length; i++) {
//     tarjetas[i].textContent = "hola chicas"
//   }
// }


// for (let i = 0; i < tarjetas.length; i++) { 
//   tarjetas[i].onclick = () => {
//     tarjetas[i].style.backgroundColor = "green"
//   }
// }



const principal = document.querySelector(".principal")
 
const array = ["Mesa de resina epoxy super cara", "Iphone 11", "Silla Eames", "Marcos", "Peluca"]

principal.innerHTML = `
  <div class='card'>
    ${array[0]}
  </div>
  <div class='card'>
    ${array[1]}
  </div>
  <div class='card'>
  ${array[2]}
  </div>
  <div class='card'>
  ${array[3]}
  </div>
  <div class='card'>
  ${array[4]}
  </div>
`