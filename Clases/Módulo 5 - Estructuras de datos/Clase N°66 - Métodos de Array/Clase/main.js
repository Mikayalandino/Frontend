// metodos de array 

// map 
// forEach
// filter 
// reduce

// const personajesCancelados = ["Manosanta", "Porcel", 
//   "Yayo", "Tinelli", "Cris Morena", "el for"]

// sintaxis:
// nombreDelArray.nombreDelMetodo(funcionAEjecutar)

// map

// recorre un array
// por cada elemento del array ejecuta la funcion que pasamos como parametro
// retorna un nuevo array con todos los retornos de la funcion parametro

// se retorna un nuevo array
// el parametro es cada elemento del array
// const nuevoArray = personajesCancelados.map((personaje) => {
//   // la funcion que se va a ejecutar por cada elemento del array
//   return personaje.toUpperCase()
// })

// console.log(nuevoArray)

// como hacer lo mismo de recien con un for:
// const nuevoArray = []
// for (let i = 0; i < personajesCancelados.length; i++) {
//   const personajeEnMayuscula = personajesCancelados[i].toUpperCase()
//   nuevoArray.push(personajeEnMayuscula)
// }
// console.log(nuevoArray)


// recibe una funcion
// crea un nuevo array a partir de los elementos retornados por esa funcion
// siempre el nuevo array tiene la misma cantidad de elementos que el array original que recorremos


// la funcion parametro recibe como parametro obligatorio cada uno de los elementos del array
// dos parametros optativos:
// el indice del elemento (siempre en segundo lugar)
// el array entero (siempre en tercer lugar)

// const personajesCancelados = ["Manosanta", "Porcel", 
//   "Yayo", "Tinelli", "Cris Morena", "el for"]

//   // si veo UN parametro, es el elemento del array
//   // si veo DOS, el segundo es el indice
//   // si veo TRES, el tercero es el array
// const nuevoArray = personajesCancelados.map((personaje, index, array) => {
//   console.log("personaje", personaje)
//   console.log("index", index)
//   console.log("array", array)
//   return `✨✨✨  ${personaje} ✨✨✨ ${array.length}`
// })

// console.log(nuevoArray)


// // // retornar un array con todos los indices de los elementos 
// // const nuevoArray = personajesCancelados.map((elemento, index, array) => {
// //   return index
// // })

// // console.log(nuevoArray)


// const librosDeJS = [
//   'JavaScript for Kids: A Playful Introduction to Programming',
//   'Composing Software',
//   'Eloquent JavaScript: A Modern Introduction to Programming',
//   'JavaScript: The Good Parts',
//   'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
//   'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
//   'JavaScript: The Definitive Guide',
//   'You Don’t Know JS',
//   'JavaScript Allongé: The Six Edition'
// ];

// const listaDeLI = librosDeJS.map((libro) => {
//   return `<li>${libro}</li>`
// })

// const convertirArrayAString =  listaDeLI.join("") 

// const agregarUL = "<ul>" + convertirArrayAString + "</ul>"

// console.log(agregarUL)


// const playlist = ['Everlong', 'The Pretender', 'Learn to Fly'];

// /// completá acá el código



// // RESULTADO ESPERADO
// // [ '0 - Everlong', '1 - The Pretender', '2 - Learn to Fly' ]


// const resultado = playlist.map((cancion, index) => {
//     return `${index} - ${cancion}` 
// })

// console.log(resultado)





// map
// se le aplica a un array
// recorre cada elemeto del array con una funcion
// crea un nuevo array a partir de cada uno de los retornos de la funcion patametro 

// filter 

// const nombres = ["Christian u", "Carola", "Zuri", "Mika", 
//   "Yani Buca", "Agus", "Gabi", "Mumuki"]


// a partir de un array, me quedo con ALGUNOS elementos
// que cumplen una condicion

// en el map
// hacemos un array con los retornos de la funcion


// en el filter
// hacemos un array con todos los elementos que respondan TRUE
// a lo que estamos retornando 

// const nombresConU = nombres.filter((elemento, index, array) => {
//   return elemento.includes("u")
// })

// console.log(nombresConU)

// es equivalente a 
// const nombresConU = []
// for (let i = 0; i < nombres.length; i++) {
//   if (nombres[i].includes("u")) {
//     nombresConU.push(nombres[i])
//   }
// }


// retornamos la CONDICION que deben cumplir los elementos 
// si responden true a esa condicion, se agregan al array nuevo 

// const edades = [3, 5, 89, 54, 18, 66, 4]

// const mayoresDeEdad = edades.filter((elemento, index, array) => {
//   return elemento >= 18 && elemento <= 60
// })


// console.log(mayoresDeEdad)


// find 
// funciona igual a filter, hay que retornar una condicion
// pero no retorna todos los elementos que cumplen esa condicion
// sino solamente el primero
// const edades = [3, 5, 89, 54, 18, 66, 4]

// const mayoresDeEdad = edades.find((elemento, index, array) => {
//   return elemento >= 18 && elemento <= 60
// })

// console.log(mayoresDeEdad)



//  const edades = [4, 5, 6, 8, 2, ]

// // every
// // const sonTodosMayoresA18 = edades.every((elemento, index, array) => {
// //   console.log(index)
// //   return elemento >= 18
// // })

// // console.log(sonTodosMayoresA18)

// // if (sonTodosMayoresA18 === true) {
// //   alert("Son mayores a 18!")
// // }

// // some 
// const algunosSonMayoresA18 = edades.some((elemento, index, array) => {
//   return elemento >=18
// })

// console.log(algunosSonMayoresA18)



// metodos de array>
// todos recorren un array 
// y reciben como parametro una funcion
// la funcion siempre va a tener un parametro obligatorio: cada elemento
// y dos optativos: el indice y el array (en orden!)
// difieren en lo que retornan

// map retorna un array con la misma cantidad de elementos que el original
// ese array se construye a partir de lo que la funcion retorna 

// filter retorna un array con menos elementos que el original
// ese array se construye a partir de los elementos que responden TRUE 
// a la condicion que la funcion retorna 

// find retorna un elemento del array original (NO UN ARRAY!)
// ese elemeto es el primero que responde TRUE 
// a la condicion que la funcion retorna 

// every retorna un booleano
// true, si todos los elementos del array pasan la condicion que la funcion retrna
// false, si al menos uno no lo hace 

// some retorna un booleano
// true, si al menos un elemento del array pasa la condicion que la funcion retrna
// false, si ninguno lo hace 