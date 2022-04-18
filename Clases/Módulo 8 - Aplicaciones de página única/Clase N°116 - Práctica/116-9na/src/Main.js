import ListaPeliculas from './ListaPeliculas';
const Main = () => {
  return (
    <div>Main
    
    <div className="App">
        <ListaPeliculas titulo="Peliculas Populares" url="popular" />
        <ListaPeliculas titulo="Peliculas mejor puntuadas" url="top_rated" />
      </div>
      
      </div>
  )
  }
  
  export default Main
