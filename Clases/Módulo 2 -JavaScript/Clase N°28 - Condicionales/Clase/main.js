// // puedo llamar funciones desde adentro de otras funciones
// // Agarrar dos numeros, sumarlos entre si, dividirlos el resultado por dos, 
// // multiplicar el resultado por 10

// const sumar = (num1, num2) => {
//   return num1 + num2;
// }

// const dividir = (num1, num2) => {
//   return num1 / num2;
// }

// const multiplicar = (num1, num2) => {
//   return num1 * num2;
// }

// const calculoComplicado = (num1, num2) => {
//   const suma = sumar(num1, num2)
//   const division = dividir(suma, 2)
//   const multiplicacion = multiplicar(division, 10)

//   return multiplicacion;
// }

// CONDICIONALES 

// operadores aritmeticos + - * /
// operador de asignacion = 

// Operadores relacionales 

// 8 < 10; // true

// const esMayorDeEdad = edadDelUsuario > 18; 

// 18 >= 18 // true
// 18 > 18 // false

// 18 <= 90  // true
// 18 <= 5 // false

// // operadores de igualdad
// edadDelUsuario === 25; // true

// == 

// ===


// const numero = "5";

// const esIgualA = numero == 5;
// const esIgualAEstricta = numero === 5;

// console.log(esIgualA)
// console.log(esIgualAEstricta)

// == // compara valor
// === // compara valor y tipo

// != // desigualdad simple
// !== // desigualdad estricta 


// 5 != 6 // true
// 5 != 5 // false
// "5" != 6 // true
// "5" != 5 // false --> comparando solo el valor (no se fija en el tipo)


// 5 !== 6 // true
// 5 !== 5 // false 
// "5" !== 6 // true
// "5" !== 5 // true --> compara valor Y tipo 

// operador de negacion 
// const esCaroNerd = false;
// console.log(!esCaroNerd) // true

// estructuras condicionales 
// sentencia if 

// const edadDelUsuario = prompt("Cual es tu edad")

// if (edadDelUsuario > 18) {
//  alert("Bienvenide a Las Vegas")
//  alert("Ud puede comprar alcohol y pornografía")
//  alert("y drogas")
// }

// si (pasa tal cosa) { (entonces)
//  hacemos tal cosa
// }


// Club de los No Homeros 

// Preguntarle al usuario su nombre
// Si el nombre del usuario NO es Homero, tenemos que mostrar 
// un cartel que diga "Bienvenide a la web"


// si, si no 

// let nombre = prompt("Ingrese su nombre");

// if (nombre !== "Homero") { // true - false 
//   alert("Bienvenide al club")
// }
// else {
//   alert("Ud no puede ingresar")
// }


// Declarar una funcion suma que reciba dos numeros
// y si el primer numero es menor a 10, retorne la suma
// Y si no, retorne el string "Numeros invalidos"

const sumar = (num1, num2) => {

    if (num1 < 10) {
      return num1 + num2
    }
    else {
      return "Numeros invalidos"
    }
  
  }
  
  
  const sumaValida = sumar(5, 5)
  console.log(sumaValida)
  
  const sumaInvalida = sumar(15, 5)
  console.log(sumaInvalida)