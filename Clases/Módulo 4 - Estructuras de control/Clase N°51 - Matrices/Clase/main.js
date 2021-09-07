// matrices 

// const nombres = ["Carolina", "Carola", "Gabi", "Naty"]
// nombres[0]

// const matriz = [ 
//   [1, 2, 3], 
//   [22, 33, 44], 
//   [555, 666, 777] 
// ]

// console.log(matriz)
// console.log(matriz[0]) // [1, 2, 3]
// console.log(matriz[0][1]) // 2
// console.log(matriz[2][0]) // 555
// alumnas[0][0] // Diame
// alumnas[1][0] // Giardini
// alumnas[2][0] // 21 edad de Diame
// alumnas[0][1] // Caro
// alumnas[1][1] // Lerner
// alumnas[2][1] // 26 edad de Caro


// const alumnas = [
//   [ "Diame", "Caro", "Cande"], 
//   ["Giardini", "Lerner", "Gaitan"], 
//   [21, 26, 22],
//   ["Diame 686", "Av. Lerner 543", "San Martin 105"]
// ]

// for (let i = 0; i < alumnas.length; i++) {
//   console.log("i", i) // 1
//   console.log(alumnas[i])                     
//   for (let j = 0; j < alumnas[i].length; j++) {
//     console.log("j", j)
//     console.log(alumnas[i][j]) 
//   }
// }


// // encontrar el numero mas grande en una matriz

// const arrayNormal = [1, 2, 3, 4, 88, 9]

// let masGrande = 0
// for (let i = 0; i < arrayNormal.length; i++) {
//   if (masGrande < arrayNormal[i]) {
//     masGrande = arrayNormal[i]
//   }
// }

// console.log(masGrande)


// const matriz = [
//   [1, 2, 4, 5, 6, 7],
//   [99, 88, 77, 66], 
//   [555, 6666, 888], 
//   [1111, 2222, 3333]
// ]

// let masGrande = matriz[0][0]
// for (let i = 0; i < matriz.length; i++) {
//   for (let j = 0; j < matriz[i].length; j++) {
//     if (matriz[i][j] > masGrande) {
//       masGrande = matriz[i][j]
//     } 
//   }
// }

// console.log(masGrande)

// const sumar = (array) => {
//   let resultado = 0  
  
//   for (let i = 0; i < array.length; i++) {
//     resultado = resultado + array[i] 
//   }
//   return resultado
// }

// const sumar = (matriz) => {
//   let resultado = 0
//   for (let i = 0; i < matriz.length; i++) {
//     for (let j = 0; j < matriz[i].length; j++) {
//       resultado = resultado + matriz[i][j]  
//     }
//   }
// }

// sumar([[4, 5],[2, 7, 1],[8, 10]])

// const obtenerFilaMasLarga = (matriz) => {
//   let resultado = []
//   for (let i = 0; i < matriz.length; i++) {
//     console.log(matriz[i])
//     if (matriz[i].length > resultado.length) {
//       resultado = matriz[i]
//     }
//   }
// }

// obtenerFilaMasLarga([[1, 4], [3, 7, 5], [1]])



const obtenerFilaMasLarga = (matriz)=>{
    let arrayMasLargo=[]
    for (let i= 0; i<matriz.length; i++){
      // for (let j= 0; j<matriz[i].length; j++){
        if(matriz[i].length>arrayMasLargo.length){
          arrayMasLargo = matriz[i]
        }
      // }
    }
    return arrayMasLargo
  }