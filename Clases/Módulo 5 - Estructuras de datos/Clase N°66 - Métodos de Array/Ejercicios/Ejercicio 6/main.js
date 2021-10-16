const playlist = ['Everlong', 'The Pretender', 'Learn to Fly'];

const nuevoArray = playlist.map((elemento, index, array) => {
    return index + ` - ${elemento}` 
})

console.log(playlist)
console.log(nuevoArray)