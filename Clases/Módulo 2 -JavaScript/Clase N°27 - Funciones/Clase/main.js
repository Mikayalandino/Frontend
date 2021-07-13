// let nombrePlaylist = prompt("¿Cuál es el nombre de la playlist?");

// let primera = prompt("¿Cuál es la primera canción?");
// let segunda = prompt("¿Cuál es la segunda canción?");
// let tercera = prompt("¿Cuál es la tercera canción?");

 // alert("Se ha creado la playlist " + nombrePlaylist + " con las canciones " 
 // + primera + ", " + segunda + ", " + tercera);



// const nombre = "Agus";
// const otroNombre = 'Sofi';


// dos ventajas (tildes invertidas o backticks)
// 1. nos permiten agregar saltos de linea
// 2. nos permiten interpolar variables

// const mensaje = `Hola ${nombre}, como estas?`;

// alert("Se ha creado la playlist " + nombrePlaylist + " con las canciones " 
// + primera + ", " + segunda + ", " + tercera);

// alert(`Se ha creado la playlist ${nombrePlaylist} con las canciones ${primera}, ${segunda}, ${tercera}`)

// interaccion 

// alert 
// prompt
// confirm

// const respuesta = confirm("Al continuar, Ud. acepta los terminos y condiciones."); // true o false
 // console.log(respuesta)


 // booleanos
 // true y false

// let tieneDeuda = true
// let nombre = "";
// let edad = 0;

// let variableSinValor;

 // Convertir a booleano
// console.log(Boolean(variableSinValor));


// todos los valores dan true menos  
 // - un string vacio ""
// - el numero 0
 // - undefined



// let funcionDeEjemplo = () => {
//   alert("Hola, estoy adentro de una funcion");
  
//   let nombrePlaylist = prompt("¿Cual es el nombre de la playlist?");
//   let primera = prompt("¿Cual es la primera canción?");
//   let segunda = prompt("¿Cual es la segunda canción?");
//   let tercera = prompt("¿Cual es la tercera canción?");

//   console.log(tercera)

//   alert("Se ha creado la playlist " + nombrePlaylist + " con las canciones " 
//   + primera + ", " + segunda + ", " + tercera);

// }

// funcionDeEjemplo();


// argumentos o parametros

// const saludar = (nombreDeLaAlumna) => {
//   console.log(`Hola, ${nombreDeLaAlumna}`);
// }

// saludar("Carola");
// saludar("Rocio");
// saludar("Mika");
// saludar("Caro");
// saludar("Cande");
// saludar("Agus");
// saludar("Sofi");
// saludar("Jenni");


// const insultoFavorito = prompt("Cual es tu mala palabra favorita?");

// const insultarAlVecino = (insulto) => {
//   alert("Vecino de Tati, " + insulto);
// }


// insultarAlVecino(insultoFavorito);




// const edad = prompt("dime tu edad"); // string 

// const aniosPerro = (edadUsuario) => {
//   console.log("Tus años en perro son:" + (edadUsuario * 7));
// }

// const otraEdad = 27;

// aniosPerro(edad);
// aniosPerro(18);
// aniosPerro(otraEdad);
// aniosPerro(99);
// aniosPerro(213);


// pasar mas de un parametro

// const presentar = (nombre, apellido, profesion) => {
//   console.log("La alumna es " + nombre + " " + apellido + " cuya ocupacion es " + profesion)
// }

// presentar("Caro", "Lew", "estudiante");
// presentar("Rocio", "Ibañez", "estudiante");


const numero1 = prompt("decime un numero");
const numero2 = prompt("decime otro numero");

const sumar = (num1, num2) => {
  return num1 + num2
}

let resultadoDeLaSuma = sumar(numero1, numero2);

let resultadoDeOtraSuma = sumar(4, 5); 0