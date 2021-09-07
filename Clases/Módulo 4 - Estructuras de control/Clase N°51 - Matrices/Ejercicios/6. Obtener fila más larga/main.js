const obtenerFilaMasLarga = (matriz) => {
    let resultado = []

    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i])
        if (matriz[i].length > resultado.length) {
            resultado = matriz[i]
        }
    }

}

obtenerFilaMasLarga([[1, 4], [3, 7, 5], [1]])