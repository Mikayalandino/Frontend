// const botonCambiarModo = document.querySelector("#cambiar")
// const contenedorGeneral = document.querySelector("#contenedor-general")

// botonCambiarModo.onclick = () => {
//   // seleccionar al botn
//   // cambiarle la clase azul por rojo
//   botonCambiarModo.textContent = "Cambiar a modo azul"
//   contenedorGeneral.classList.toggle("azul")
//   contenedorGeneral.classList.toggle("rojo")

//   if (botonCambiarModo.classList.contains("azul")) {
//     botonCambiarModo.textContent = "Cambiar a modo rojo"
//   }
//   else {
//     botonCambiarModo.textContent = "Cambiar a modo azul"
//   }

// }



// arrays adentro de arrays 

// const nombres = ["Mika", 9, [1, 2, 3, ["Tokio", "Trufa", "Pericles", "Tony"], 4, 5], "Tati", 8, "Sofi", 7, "Pame"]

// console.log(nombres)
// console.log(nombres[0])
// console.log(nombres[1])
// console.log(nombres[2])


// // el array que esta en la posicion 2 de nombres
// // el elemento que esta en la posicion 0 del array que esta en la posicion 2 de nombres


// console.log("nombres[2][0]", nombres[2][0] )

// console.log("nombres[2][3]", nombres[2][3] )

// console.log("nombres[2][3][3]", nombres[2][3][1] ) // Trufa

const edades = [
    1, 
    2, 
    3
  ]
  
  // const matriz =  [ 
  //   ["Plumito", "toto", "Bebu", "Hideo", "Volt", "haku", "homero"],
  //   ["gato", "perro", "siamesa zenzual", "callejero", "gato", "conejo", "chinchilla"], 
  //   [2, 4, 7, 1, 9, 11, 147 ] 
  // ]
  
  
  // matriz[0][0]
  // matriz[1][0]
  // matriz[2][0]
  
  // console.log(matriz)
  
  // console.log(matriz[0])
  
  // console.log(matriz[0][5])
  
  // console.log(matriz[0][0], matriz[2][6], matriz[1][2])
  
  // console.log(matriz[1][2])
  
  // console.log(matriz[1][2])
  
  
  // const nombres = ["caro", "afri", "naty", "agus"]
  
  // for (let i = 0; i < nombres.length; i++) {
  //   const nombre = nombres[i];
    
  //   console.log(i)
  //   console.log(nombre)
  // }
  
  // const matriz =  [ 
  //   ["Plumito", "toto", "Bebu", "Hideo", "Volt", "haku", "homero"],
  //   ["gato", "perro", "siamesa zenzual", "callejero", "gato", "conejo", "chinchilla"], 
  //   [2, 4, 7, 1, 9, 11, 147 ] 
  // ]
  
  // i: 0, 1, 2
  // for (let i = 0; i < matriz.length; i++) {
  //   const array = matriz[i];
  //   for (let j = 0; j < array.length; j++) {
  //     // j: 0, 1, 2, 3, 4, 5, 6
  //     const element = array[j];
  
  //     console.log("i", i)
     
  //     console.log("j", j)
  
  //     console.log(matriz[i])
  //     console.log(matriz[i][j]) 
  //   }
  // }
  
  
  
  
  
  
  
  // DESDE I = 0 HASTA ARRAY.LENGTH 
  //   MOSTRAR ARRAY[I]
  //   FIN-DESDE
  
  
  // DESDE I = 0 HASTA ARRAY.LENGTH
  //   DESDE J = 0 HASTA ARRAY[I].LENGTH
  //   MOSTRAR ARRAY[I][J]
  //   FIN-DESDE J 
  // FIN-DESDE I 
  
  
  
   // const edades = [1, 2, 66, 22, 14, 26, 8, 99, 6, 23]
  
  // dado un array de 10 numeros
  // mostrar los que son mayores a 5 en la consola
  
  
  // const funcionSolicitada = (array) => {
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i] > 5) {
  //       console.log(array[i])
  //     }
  //   }
  // }
  
  // // son equivalentes, lo unico que cambia es que aca declaro una variable:
  
  // const funcionSolicitada = (array) => {
  //   for (let i = 0; i < array.length; i++) {
  //     const numero = array[i]
  //     if (numero > 5) {
  //       console.log(numero)
  //     }
  //   }
  // }
  
  // variables
  // ARRAY = ARREGLO DE LONGITUD 10
  
  // DESDE I = 0 HASTA ARRAY.LENGTH (LONGITUD DE ARRAY)
  //   DECLARO LA VARIABLE NUMERO COMO ARRAY[I]
  //   SI (NUMERO > 5) ENTONCES
  //     MOSTRAR EN CONSOLA NUMERO
  // FIN DESDE I