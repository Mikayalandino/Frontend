const puedeVerPelicula = (edad, tieneAutorizacion) => {
    if (edad >= 15 || tieneAutorizacion){
      return true
    }
  else{
    return false
  }
}


/* const puedeVerPelicula = (edad, tieneAutorizacion) => {
    return edad >= 15 || tieneAutorizacion
} */