const puedeGraduarse = (asistencia, materiasAprobadas, tesisAprobada) =>{
    return asistencia >= 75 && materiasAprobadas >= 50 && tesisAprobada === true
}