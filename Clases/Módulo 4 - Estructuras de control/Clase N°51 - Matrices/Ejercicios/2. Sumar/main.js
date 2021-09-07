const sumar = (matriz) => {

    let resultado = 0

    for (let i = 0; i < matriz.length; i++) {
        
        for (let j = 0; j < matriz[i].length; j++) {
            resultado = resultado + matriz[i][j]
        }
    }

} 

sumar([[1, 2, 3],[4, 5, 6],[7, 8, 9]])