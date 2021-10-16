const numeros = ["3", "2", "6", "4"]

const nuevoArray = numeros.map((elemento, index, array) => {
    return elemento * 2
})

console.log(numeros)
console.log(nuevoArray)