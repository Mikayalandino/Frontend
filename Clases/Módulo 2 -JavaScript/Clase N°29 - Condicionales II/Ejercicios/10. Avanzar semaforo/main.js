const avanzarSemaforo = (colorActual) =>{
    if (colorActual === "verde"){
      return "amarillo"
    }
    else if (colorActual === "amarillo"){
      return "rojo"
    }
    else if (colorActual === "rojo"){
      return "verde"
    }
}