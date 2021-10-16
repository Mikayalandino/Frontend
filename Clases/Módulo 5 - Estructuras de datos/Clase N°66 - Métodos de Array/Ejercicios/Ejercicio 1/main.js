const numeros = [ "1", "5", "2", "3"]

const numerosMasDiez = numeros.map((elemento, index, array) => {
  return elemento + 10
})

console.log(numeros)
console.log(numerosMasDiez)