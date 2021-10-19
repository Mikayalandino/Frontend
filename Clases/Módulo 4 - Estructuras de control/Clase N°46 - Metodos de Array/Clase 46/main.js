// const moana = ["Moana", "Tamatoa", "Maui", "Hei Hei"]

// // slice
// // retorna elementos de un array de acuerdo a su posicion
// // no modifica el array original
// // recibe dos parametros: el primero, a partir desde donde cortar el array (inclusive)
// // y el segundo, hasta donde cortar el array (no inclusive)

// const elementosCortados = moana.slice(0, 2)
// console.log("elementosCortados", elementosCortados)
// console.log("moana", moana)

// // splice
// // modificar un array, para agregarle o quitarle elementos
// // recibe tres parametros
// // el primero, en que pisicion vamos a agregar o quitar elementos
// // el segundo, la cantidad de elementos a eliminar
// // el tercero/cuarto/quinto/etc (optativo) los elementos a agregar

// console.log("splice", moana.splice(1, 2, "La abuela Tala"))
// console.log("moana", moana)


// concat 
// concatenar dos arrays
// no modifica el array original
// retorna un nuevo array con los elementos del primero y el segundo

// const alumnasAnsiosas = ["Sofi", "Kari"]

// console.log(moana.concat(["Ana, Elsa, Olaf"]))
// console.log(moana.concat(alumnasAnsiosas))
// console.log(moana)
// const moanasAnsiosas = moana.concat(alumnasAnsiosas)




// // includes 
// // retorna true si el array contiene el parametro
// // retorna false si no lo contiene
// console.log(moana.includes("Ana")) // false
// console.log(moana.includes("Moana")) // true

// // se puede usar en conjuncion con la condicion del
// const arrayIncluyeVillanos = (array) => {
//   // si el array incluye villanos tengo que decir "hay villanos"
//   if (array.includes("Tamatoa") || array.includes("Hans")) {
//     return "Este array contiene villanos"
//   }
//   else {
//     return "No hay villanos en este array"
//   }
// }




// join
// no modifica el array original
// retorna un string con los elementos del array unidos por el parametro
// const parrafo = document.getElementById("personajes")
// console.log(moana.join(", "))
// parrafo.textContent = moana.join(", ")


// // reverse
// // modifica el array original
// // invierte el orden de los elementos
// // no recibe parametros
// // retorna el array invertido

// console.log(moana.reverse())
// console.log(moana)



// sort 
// ordena alfabeticamente
// modifica el array original
// no recibe parametros
// solo ordena alfabeticamente, solo strings

// moana.sort()
// console.log(moana)

// // con numeros da resultados extraños
// const edades = [11, 99, 1, 9, ]
// edades.sort()
// console.log(edades) // 1, 11, 9, 99



// los metodos se concatenan

// console.log(moana.sort())
// console.log(moana.sort().reverse())




const frozen = ["Elsa", "Hans", "Olaf", "Ana", "Kristoff"]
const moana = ["Moana", "Tamatoa", "Maui", "Hei Hei"]
const productos = ["iphone", "tv", "mac"]

// 3. Hacer una funcion "incluyeNombre" que reciba un array y un string y retorne true si el array incluye al string, o false en caso contrario. 

const incluyeNombre = (array, nombre) => {

 return array.includes(nombre)

  // if (array.includes(nombre)) {
  //   return true 
  // }
  // else {
  //   return false
  // }  
}

// console.log(incluyeNombre(moana, "Ana")) // false
console.log(incluyeNombre(frozen, "Ana")) // true
// console.log(incluyeNombre(frozen, "Tamatoa")) // false
// console.log(incluyeNombre(moana, "Maui")) // true
// console.log(incluyeNombre(productos, "iphone")) // true
