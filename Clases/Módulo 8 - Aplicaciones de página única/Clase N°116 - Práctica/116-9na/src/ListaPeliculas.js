import { useState, useEffect } from "react"
import PeliculaItem from "./PeliculaItem"

const ListaPeliculas = ({ titulo, url }) => {

  const [peliculas, setPeliculas] = useState([])
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${url}?api_key=92b7c9e2808de339886a0b75ca3aa28e&language=es-AR&page=1`)
    .then(res => res.json())
    .then(data => setPeliculas(data.results))
  }, [])

  return (
    <div className="lista-peliculas">

      <h2>{titulo}</h2>

      {peliculas.map(pelicula => (
        <PeliculaItem 
        titulo={pelicula.title}
        imagen={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`}
        link={`/${pelicula.id}`}
      />
        ))}
    </div>
  )
}

export default ListaPeliculas
