//primera parte 

// const inputNombre = document.getElementById("input-nombre")
// const inputContrasenia = document.getElementById("contrasenia")
// const inputContraseniaConfirmacion = document.getElementById("contrasenia-confirmacion")
// const error = document.getElementById("error")
// const imagen = document.querySelector("img")

// console.log(inputContrasenia)
// const mostrarElementoEnFoco = () => {
//   console.log("el elemento esta en foco")
// }

// const mostrarElementoEnBlur = () => {
//   console.log("el elemento ya no esta mas en foco")
// }

// inputNombre.onfocus = mostrarElementoEnFoco

// inputNombre.onblur = mostrarElementoEnBlur

// // focus
// // blur

// const escucharCambios = () => {
//   console.log("el usuario envio un cambio")
// }

// // change
// inputNombre.onchange = escucharCambios


// const escucharCadaTipeo = (event) => {
//   console.log(event.target.value)
// }

// inputNombre.oninput = escucharCadaTipeo



// const confirmarSiContraseniasSonIguales = () => {

//   const contrasenia1 = inputContrasenia.value
//   const contrasenia2 = inputContraseniaConfirmacion.value

//   if (contrasenia1 !== contrasenia2) {
    
//     inputContrasenia.style.borderColor = "#FF0000"
//     inputContraseniaConfirmacion.style.borderColor = "#FF0000"

//     error.textContent = "Las contraseñas deben ser iguales"
//     error.style.border = "1px solid #FF0000"
//     error.style.color = "#0000FF"
//     imagen.src = "http://www.placekitten.com/200"
//   }
//   else {
//     inputContrasenia.style.borderColor = "#00FF00"
//     inputContraseniaConfirmacion.style.borderColor = "#00FF00"

//     error.style.border = "1px solid #00FF00"
//     error.style.color = "#0000FF"
//     // imagen.src = "http://www.placekitten.com/200"
//   }
// }

// inputContraseniaConfirmacion.onblur = confirmarSiContraseniasSonIguales



// todos mis elementos de formulario van a tener 4 eventos asociados
// onfocus --> el usuario hace foco
// onblur --> el usuario saca el foco
// onchange --> el usuario envia un valor
// oninput --> el usuario escribe algo 



// segunda parte

// const form = document.getElementById("formulario")
// const inputEdad = document.getElementById("edad")
// const inputProvincia = document.getElementById("provincia")
// const inputGato = document.getElementById("gato")
// const inputPerro = document.getElementById("perro")
// const inputConejo = document.getElementById("conejo")
// const inputSuenios = document.getElementById("suenios")
// const inputColor = document.getElementById("color")
// const inputAmorConejos = document.getElementById("amor-conejos")

// form.onsubmit = (event) => {
//   event.preventDefault()

//   console.log(inputEdad.value)
//   console.log(inputProvincia.value)

//   console.log(inputGato.value)
//   console.log(inputGato.checked)

//   console.log(inputPerro.value)
//   console.log(inputPerro.checked)
  
//   console.log(inputConejo.value)
//   console.log(inputConejo.checked)
  
  
//   console.log(inputSuenios.value)
//   console.log(inputColor.value)
//   console.log(inputAmorConejos.value)
// } 


// tercera parte 


const textoInput = document.getElementById("texto")
const textoResultado = document.getElementById("resultado-texto")
const colorInput = document.getElementById("color")
const imagenInput = document.getElementById("imagen")
const resultadoImagen = document.getElementById("resultado-imagen")

textoInput.oninput = () => {
  textoResultado.textContent = textoInput.value 
}

colorInput.oninput = () => {
  // colorInput.value 
  textoResultado.style.color = colorInput.value
}

imagenInput.oninput = () => {
  // imagenInput.value
  resultadoImagen.src = imagenInput.value 

}
