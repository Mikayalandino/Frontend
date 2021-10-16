const frases = ["Hola Mia", "Hola Batman", "Hola Tokio"]

const nuevoArray = frases.map((elemento, index, array) => {
    return `¡${elemento}!`
})

console.log(frases)
console.log(nuevoArray)