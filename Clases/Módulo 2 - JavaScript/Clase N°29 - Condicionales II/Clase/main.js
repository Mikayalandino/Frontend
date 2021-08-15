// operadores de comparacion

// >
// < 
// >=
// <= 
// ==
// ===
// !=
// !==
// !

// if e if else

// si (se cumple esta condicion) { (entonces)
//   (hacer lo que esta aca)
// }

// const colorSemaforo = prompt("escribi el color del semaforo")

// // if (colorSemaforo === "verde") {
// //   alert("podes avanzar");
// // }

// // if (colorSemaforo === "rojo") {
// //   alert("no puede avanzar");
// // }

// // if (colorSemaforo === "violeta") {
// //   alert("no hay tal cosa")
// // }


// if (colorSemaforo === "verde") {
//   alert("puede avanzar")
// }
// else {
//   alert("no puede avanzar")
// }


// const esPositivoONegativo = (numero) => {
//   if (numero > 0) {
//     return "positivo"
//   }
//   else {
//       return "negativo"
//   }
// }


// rojo: "detenerse"
// amarillo "precaucion"
// verde: "avance"
// cualquier otro color: "Color invalido"

// if else if 

// si (pasa algo) entonces (hace tal cosa)
// en cambio si (pasa otra cosa) entonces (hace tal otra cosa)
// en cambio (hace otra cosa)

// if
// if (color === "rojo") {
//   alert("rojo")
// } 

// if else 
// if (color === "rojo") {
//   alert("rojo")
// }
// else {
//   alert("no rojo")
// }

// else if
// if else if 
// if (color === "rojo") {
//   alert("hola")
// }
// else if (color === "amarillo") {
//   alert("precaucion")
// }
// else if (color === "verde") {
//   alert("avance")
// }
// else { // condicion default 
//   alert("color invalido")
// }


// "y" y "o"

//     &&   ---> "y" 

//      ||  ---> "o"
// && "y"
// Para que una expresion que tiene && sea true, todos los miembros deben ser true

// const edad = 23;
// const plataEnElBanco = 3000;
// const seIdentificaComoMujer = true;
// const esFanDeRicardoMontaner = true;

// seIdentificaComoMujer && edad > 18 && esFanDeRicardoMontaner --> true

// edad === 18 && plataEnElBanco < 5000 --> false

// si todos los elementos de la cadena son true, la cadena es true
// si al menos uno es false, la cadena es false


// o ||

// Si al menos uno de los miembros de la cadena es true, toda la cadena es true 
// Solo si todos los miembros son false, la cadena es false
// const esFanatiqueDeRickyFort = true;
// const seIdentificaComoMujer = true;

// esFanatiqueDeRickyFort || seIdentificaComoMujer --> true

// const edad = prompt("Decime tu edad");
// const vaAcompaniadoPorSusPadres = prompt("Si vas acompañado por tus padres deci 'si', si no, deci 'no'.")

// console.log(edad)
// console.log(vaAcompaniadoPorSusPadres)

// if (edad >= 18 || vaAcompaniadoPorSusPadres === "si") {
//   alert("Podes ver la pelicula")
// }
// else {
//   alert("No podes ver la pelicula")
// }


// es consonante 

// si la letra es "A"
// o la letra es "e"
// o la letra es "i"
// ---> la letra NO es consonante 

// si la letra no es "a"
// y la letra no es "e"
// y la letra no es "i"
// ---> la letra SI es consonante 
