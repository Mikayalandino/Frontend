// // dada una matriz, llevar esa matriz a HTML en forma de tabla

// // generar una grilla con elementos al azar


// // Math.random() me da un numero al azar entre 0 y 1 (con muchos decimales)
// // console.log( Math.random() )


// // Math.floor() // piso
// // Math.ceil() // techo

// // console.log(Math.floor(5.9)) // 5
// // console.log(Math.ceil(5.2)) // 6
// // console.log(Math.round(5.5)) // 6
// // console.log(Math.round(5.4)) // 5


// // Un numero al azar entre 0 y 10
// // console.log(Math.random() * 10)

// // let numeroAlAzar = Math.random()

// // console.log(numeroAlAzar)


// // let numeroMultiplicado = numeroAlAzar * 10

// // console.log(numeroMultiplicado)

// // let numeroRedondeado = Math.floor(numeroMultiplicado)

// // console.log(numeroRedondeado)

// // // cuando quiero un numero al azar de 0 a 10 (10 no inclusive)
// // Math.floor(Math.random() * 10)

// // // cuando quiero un numero al azar de 0 a 100 (100 no inclusive)
// // Math.floor(Math.random() * 100)

// // // cuando quiero un numero al azar de 0 a 3 (3 no inclusive)
// // Math.floor(Math.random() * 3)


// // const arr = ["🍋", "🍒", "🍑", "🥥"] // 4 

// // const arrayLargo = ["😃", "🐻", "🍔" , "⚽" ,"🌇" , "💡" , "🔣" , "🎌"] // 8



// // const numeroAlAzar = obtenerNumeroAlAzar(arr) 
// // const numeroAlAzarLargo = obtenerNumeroAlAzar(arrayLargo)

// // console.log(numeroAlAzar) // 1
// // console.log(numeroAlAzarLargo) // 5

// // console.log( arr[numeroAlAzar] )  // coco dice COCO SOFIA 
// // console.log(arrayLargo[numeroAlAzarLargo])   // oso 

// const obtenerNumeroAlAzar = (array) => {
//   return Math.floor(Math.random() * array.length)
//  }


// //  // recibe un numero y un array y genera un array aleatorio de longitud columnas
// //  // con elementos al azar de items
// // const generarArrayAlAzar = (columnas, items) => {
// //   let resultado = []
// //   for (let i = 0; i < columnas; i++) {
// //     const numeroalAzar = obtenerNumeroAlAzar(items) // 0 1 2 3 4
// //     console.log("numeroalAzar", numeroalAzar)
// //     console.log("items[numeroalAzar]", items[numeroalAzar])
// //     resultado.push(items[numeroalAzar])
// //   }

// //   return resultado
// // }

// // const arr = ["🍋", "🍒", "🍑", "🥥"] // 4 

// // console.log(generarArrayAlAzar(8, arr))



// // const generarGrilla = (filas, columnas, items) => {

// // ESTA ES SU TAREA

  
// // }

// // console.log(generarGrilla(2, 3, [1, 2]))
// // // [
// // //   [1, 1, 2], 
// // //   [2, 1, 1]
// // // ]

// // console.log(generarGrilla(3, 3, ['a', 'b', 'c']))

// // // [
// //   ['c', 'c', 'a'], 
// //   ['c', 'a', 'a'], 
// //   ['b', 'a', 'b']
// // ]



// // const matriz = [
// //   ["🍋", "🍒", "🍑"], 
// //   ["🍑", "🍋", "🍒" ], 
// //   ["🍑", "🍒", "🍋"], 
// // ]

// const array = ["🍋", "🍒", "🍑"]

// // `<div class="item">🍋</div>
// // <div class="item">🍒</div>
// // <div class="item">🍑</div>`

// const generarStringHTML = (array) => {
//   let resultado = ""

//   for (let i = 0; i < array.length; i++) {
//     resultado = resultado + `<div class="item">${array[i]}</div>`
    
//   }
//   return resultado
// }


// const grilla = document.querySelector(".grilla")

// grilla.innerHTML = generarStringHTML(["🍋", "🍋","🍋", "🍋","🍋","🍋",])





// const invertirCaso = (string) => {
//   let resultado = []
//   let abecedario = "abcdefghijklmnopqrstuvwxyzñ"

//   // puedo recorrer strings como si fueran arrays con un for 

//   for (let i = 0; i < string.length; i++) {
//     let letra = string[i]
//     if (abecedario.includes(letra)) { // la letra es minuscula 


//       resultado.push(letra.toUpperCase())
//     }
//     else {
//       resultado.push(letra.toLowerCase()) 
//     }
//   }

//   return resultado
// }
// console.log(invertirCaso('Ada Lovelace') )
// 'aDA lOVELACE'
//  invertirCaso('feliz cumple') 
// 'FELIZ CUMPLE'
//  invertirCaso('jAvAsCrIpT')
// 'JaVaScRiPt'

// const capitalizarPalabras = (string) => {

//   // convierto a mayuscula string[0]
//   for (let i = 0; i < string.length; i++) {
//     console.log(i)
//     console.log(string[i])
//     if (string[i] === " ") {
//       // convierto string[i + 1] a mayuscula
//     }

//   }
// }

// console.log(capitalizarPalabras("me Faltaban Las Comillas En El Join"))




// const obtenerNumeroAlAzar = (array) => {
//   return Math.floor(Math.random() * array.length)
//  }


 // recibe un numero y un array y genera un array aleatorio de longitud columnas
 // con elementos al azar de items
// const generarArrayAlAzar = (columnas, items) => {
//   let resultado = []
//   for (let i = 0; i < columnas; i++) {
//     const numeroalAzar = obtenerNumeroAlAzar(items) // 0 1 2 3 
//     // console.log("numeroalAzar", numeroalAzar)
//     // console.log("items[numeroalAzar]", items[numeroalAzar])
//      resultado.push(items[numeroalAzar])
//   }

//   return resultado
// }

// const arr = ["🍋", "🍒", "🍑", "🥥"] // 4 

// console.log(generarArrayAlAzar(8, arr))




// ELEMENTOS DEL DOM
const grilla = document.querySelector(".grilla")


// FUNCIONES AUXILIARES 

const obtenerNumeroAlAzar = (array) => {
  return Math.floor(Math.random() * array.length)
 }

const generarArrayAlAzar = (columnas, items) => {
  let resultado = []
  for (let i = 0; i < columnas; i++) {
    const numeroalAzar = obtenerNumeroAlAzar(items) // 0 1 2 3 
    resultado.push(items[numeroalAzar])
  }
  return resultado
}

const generarGrilla = (filas, columnas, items) => {
  let matriz = []
  for (let i = 0; i < filas; i++) {
    const arrayAlAzar = generarArrayAlAzar(columnas, items) // [1, 2, 2]
    matriz.push(arrayAlAzar)
  }
  return matriz // []
}

const convertirAString = (matriz) => {
  let resultado = []
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      resultado.push(`<div class="item">${matriz[i][j]}</div> `) 
    }
  }
  return resultado.join("")
}


const dificultad = prompt("facil, medio o dificil?")

// si el usuario dice facil tenemos que generar una grilla de 10*10
// si el usuario dice medio tenemos que generar una grilla de 8*8
// si el usuario dice dificil tenemos que generar una grilla de 7*7



if (dificultad == "facil") {
  const grillaFacil = generarGrilla(10, 10, ["🍋", "🍒", "🍑", "🥥"])
  const grillaEnHTML = convertirAString(grillaFacil) 
  grilla.innerHTML = grillaEnHTML
  grilla.style.width = "300px"
}
else if (dificultad == "medio") {
  const grillaMedio = generarGrilla(8, 8, ["🍋", "🍒", "🍑", "🥥"])
  const grillaEnHTML = convertirAString(grillaMedio) 
  grilla.innerHTML = grillaEnHTML
  grilla.style.width = "240px"
}
else if (dificultad == "dificil") {
  const grillaDificil = generarGrilla(7, 7, ["🍋", "🍒", "🍑", "🥥"])
  const grillaEnHTML = convertirAString(grillaDificil) 
  grilla.innerHTML = grillaEnHTML
  grilla.style.width = "210px"
}






for (let i = 0; i < grilla.length; i++) {
  for (let j = 0; j < grilla[i].length; j++) {
    if (grilla[i][j] === grilla[i][j + 1] && 
      grilla[i][j + 1] === grilla[i][j + 2]) {
      // tres frutas iguales una al lado de la otra 
    }
    
  }
  
}