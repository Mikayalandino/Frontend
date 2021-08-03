const obtenerSensacion = (temperatura) => {
    if (temperatura < 0){
      return "¡Está helando!"
    }
    if (temperatura >= 0 && temperatura < 15){
      return "¡Hace frío!"
    }
    if (temperatura >= 15 && temperatura <= 25){
      return "Está lindo"
    }
    if (temperatura >= 25 && temperatura < 30){
      return "Hace calor"
    }
    if (temperatura >= 30){
      return "¡Hace mucho calor!"
    }
}