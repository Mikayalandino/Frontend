import PresentacionPeliculas from "./PresentacionPeliculas"
import {useEffect, useState} from "react"

const Popular = () => {

  const [peliculas, setPeliculas] = useState([])
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=es-AR&page=1`)
    .then(res => res.json())
    .then(data => setPeliculas(data.results))
  }, [])

  return (
    <PresentacionPeliculas 
      titulo="Peliculas Populares"
      peliculas={peliculas}
    />
  )
}

  
  export default Popular
