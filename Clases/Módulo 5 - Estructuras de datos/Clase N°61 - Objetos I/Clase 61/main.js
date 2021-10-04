// // tipos de datos 


// // // primitivos 
// // String
// // Number
// // boolean 
// // null 
// // undefined

// // // compuestos 
// // arrays
// // funciones 
// // Objetos 

// // const nombre = "Caro"
// // const apellido = "Lerner"
// // const edad = 27
// // const direccion = "Calle Falsa 123"

// // const persona = ["Caro", "Lerner", 27, "Calle Falsa 123"]
// // // La persona se llama Caro y tiene 27 años
// // console.log(`La cumpleañera se llama ${persona[0]} y tiene ${persona[2]} años`)

// const direccionDeCaro = "Calle Falsa 123"

// const persona = {
//   nombre: "Caro", 
//   edad: 27,
//   apellido: "Lerner", 
//   direccion: direccionDeCaro, 
//   tecnologiasQueConoce: ["HTML", "Css", "Javascript", "Ansiedad"], 
//   ubicacionGeografica: {
//     pais: "Argentina", 
//     provincia: "Buenos Aires", 
//     barrio: "Avellané", 
//   }
// }
// // console.log(persona.nombre)
// // console.log(persona.edad)
// // console.log(persona.tecnologiasQueConoce)
// // console.log(persona.tecnologiasQueConoce[0]) // HTML
// // console.log(persona.fechaDeCumpleanios)
// // // agregar propiedades
// // const cumpleDeCaro = "26/09/1994"
// // persona.fechaDeCumpleanios = cumpleDeCaro
// // persona.anioDeNacimiento = 1994
// // persona.bullys = ["Griselda", "Sofi", "Caro"]

// // // modificar propiedades
// // persona.direccion = "Calle Genias De La Programacion 456"

// // console.log(persona)

// // acceder a objetos dentro de objetos
// // console.log(persona)
// // console.log(persona.ubicacionGeografica)
// // console.log(persona.ubicacionGeografica.barrio)


// const producto =   {
//   id: "MLA810645375",
//   title: "Motorola G6 Plus 64 Gb Nimbus",
//   price: 17999,
//   currency_id: "ARS",
//   condition: "new",
//   permalink: "https://www.mercadolibre.com.ar/p/MLA9452524",
//   installments: {
//       quantity: 12,
//       amount: 2456.41,
//       rate: 63.77,
//       currency_id: "ARS",
//     },
//   thumbnail:
//     "http://mla-s2-p.mlstatic.com/795558-MLA31003306206_062019-I.jpg",
//   free_shipping: false,
// }

// const imagen = document.querySelector("#imagen")
// const titulo = document.querySelector("#titulo")
// const precio = document.querySelector("#precio")
// const envioGratis = document.querySelector("#envio-gratis")

// imagen.src = producto.thumbnail
// titulo.textContent = producto.title
// precio.textContent = producto.price

// if (producto.free_shipping == true) {
//   envioGratis.textContent = "Envio gratis"
// }


// const persona = {
//   nombre: "Naty", 
//   apellido: "Navarro", 
//   edad: 22
// }


// console.log(persona)

// persona.aDireccion = "Calle falsa 1234"

// console.log(persona)


// // ejercicio 4
// const disco = {
//   id: 1,
//   nombre: 'Wasting Light',
//   anioLanzamiento: 2011,
//   cantidadDeTemas: 12,
//   banda: {
//     nombre: 'Foo Fighters',
//     anioFormacion: 1994
//   }
// };


// console.log(`El disco ${disco.nombre} de la banda ${disco.banda.nombre} 
//  se lanzó en el año ${disco.anioLanzamiento}`)


// ejercicio 5
// const usuarioEjemplo = {
//   id: 0,
//   nombre: "Ejemplo",
//   email: "ejemplo@terra.com",
//   telefono: "1029384756"
// }

// const tecnologiasConocidas = ["html", "css", "js", "react"]

// usuarioEjemplo.tecnologiasConocidas =  ["html", "css", "js", "react"]
// usuarioEjemplo.sabeProgramar = true 

// console.log(usuarioEjemplo)


// ejercicio 6

// queda para ustedes


const usuarioEjemplo = {
    id: 0,
    nombre: "Usuario ejemplo",
    email: "ejemplo@terra.com",
    telefono: "1029384756"
  }
  
  const usuarioEjemplo2 = {
    id: 0,
    nombre: "Usuario 2 ejemplo",
    email: "ejemplo@terra.com",
    telefono: "1029384756"
  }
  
  
  const saludar = (string) => {
    return "Hola, " + string
  }
  
  console.log(saludar(usuarioEjemplo.nombre))
  console.log(saludar("Caro"))
  
  // const saludarConObjeto = (objeto) => {
  //   return "Hola, " + objeto.nombre
  // }
  
  // console.log(saludarConObjeto(usuarioEjemplo))
  // console.log(saludarConObjeto(usuarioEjemplo2))