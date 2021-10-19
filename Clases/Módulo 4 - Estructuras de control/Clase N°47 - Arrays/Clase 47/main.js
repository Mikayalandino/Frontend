// los metodos de arrays retornan valores
// pueden modificar el array original 

// console.log(nombres.sort())
// console.log(nombres)

// push 
// agregar un elemento al final de un array
// modifica el array original
// retorna la nueva longitud del array
// nombres.push("Gabi")
// console.log(nombres)

// const edades = [8, 34, 12, 90, 88, 43]

// const mayoresDe18 = []

// for (let i = 0; i < edades.length; i++) {
//   if (edades[i] >= 18) {
//     mayoresDe18.push(edades[i])
//   } 
// }

// const nombres = ["Eli", "Vicky", "Eli", "Jenni", "Sofi", "Eli", "Agus"]

// const elis = []

// for (let i = 0; i < nombres.length; i++) {
//   console.log("i",  i)
//   console.log("nombres[i]", nombres[i])

//  if (nombres[i] === "Eli") {
//    elis.push(i)
//  }
// }

// console.log(elis)

// nombres[0] // Vicky
// nombres[1] // Eli nombres[i]
// nombres[2] // Jenni
// nombres[3] // Sofi
// nombres[4] // Agus













// Definí una función recortar que reciba como argumentos 
// un número cantidadLetras y un array de strings palabras 
// y devuelva un array con las mismas palabras pero recortadas. 
// Las palabras se recortan dejando cantidadLetras letras al inicio, 
// y recortando las demás. Por ejemplo, elefante recortada a 4 
// letras queda elef.

const recortar = (cantidadLetras, palabras) => {

    const arrayFinal = []
  
    for (let i = 0; i < palabras.length; i++) {
      arrayFinal.push(palabras[i].slice(0, cantidadLetras))
    }
    return arrayFinal
  }
  
  console.log(recortar(4, ['elefante', 'dinosaurio', 'chocolate', 'avion', 'america']))
  // ['elef', 'dino' 'choc', 'avio', 'amer']
  console.log(recortar(1, ['algoritmo', 'bug', 'compilador']))
  // ['a', 'b', 'c']
  
  
  // pop
  // eliminar el ultimo elemento de un array
  // modifica el array original 
  // retorna el elemento eliminado 
  // no recibe parametros
  // const nombres = ["Mika", "Gabi", "Pame" ]
  
  // console.log(nombres.pop())
  // console.log(nombres)
  
  
  
  // shift 
  // elimina el primer elemento de un array 
  // modifica el array original
  // retorna el elemento eliminado
  //  const nombres = ["Mika", "Gabi", "Pame" ]
  //                       // 0      1        2
  // console.log(nombres.shift())
  // console.log(nombres) // ["Gabi", "Pame"]
  //                              //  0      1   
  
  // console.log(nombres.shift()) // ["Pame"]
  //                                       // 0
  // console.log(nombres)
  
  
  // unshift 
  // agrega un elemento al principio del array
  // modifica el array original
  //  retorna la nueva longitud del array 
  
  // const nombres = ["Mika", "Gabi", "Pame" ]
  
  
  // // const masNombres = ["Pame", "Gabi", "Mika"]
  // // for (let i = 0; i < nombres.length; i++) {
  // //   console.log(masNombres.unshift(nombres[i])) 
  // // }
  
  // console.log(masNombres)
  // esto nos hace caer en un loop infinito
  // no modificamos arrays mientras los estamos recorriendo
  
  // for (let i = 0; i < nombres.length; i++) {
  //  nombres.push(nombres[i])
  // }
  
  
  
  
  // const tarjetas = ["debito", "credito", "debito", "debito", "credito"]
  
  // // debito debito debito credito credito 
  
  // // unshift
  // // push
  // const arrayFinal = []
  
  // for (let i = 0; i < tarjetas.length; i++) {
  //   if (tarjetas[i] === "debito") {
  //     arrayFinal.unshift(tarjetas[i])
  //   }
  //   else if (tarjetas[i] === "credito") {
  //     arrayFinal.push(tarjetas[i])
  //   }
    
  // }
  
  // console.log(arrayFinal)
  