const esFraccionMayorAUno = (fraccion) => {
    if (fraccion.charAt(0) > fraccion.charAt(2)){
        return true
    }
    else {
        return false
    }
}

const esFraccionMayorAUno = (fraccion) => {
    let numerador = fraccion.charAt(0)
    let denominador = fraccion.charAt(2)
    
  return(numerador/denominador) > 1
  
}
    