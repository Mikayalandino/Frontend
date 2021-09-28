const disco = {
    id: 1,
    nombre: 'Wasting Light',
    anioLanzamiento: 2011,
    cantidadDeTemas: 12,
    banda: {
        nombre: 'Foo Fighters',
        anioFormacion: 1994
    }
};

const info = `El disco ${disco.nombre} de la banda ${disco.banda.nombre}, se lanzó en el año ${disco.anioLanzamiento}`

console.log(info)