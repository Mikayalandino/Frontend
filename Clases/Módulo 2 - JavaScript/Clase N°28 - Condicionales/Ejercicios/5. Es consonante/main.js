// const esVocal = (letra) => {

//   if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
//   return true
//     }
//   else{
//     return false
//     }
// }


// const esConsonante = (letra) =>{
//   if (letra !== "a" && letra !== "e" && letra !== "o" && letra !== "u")
// }


const esConsonante = (letra) => {
  if (esVocal(letra)) {
  return false    
  }
  else{
    return true
    }
}
