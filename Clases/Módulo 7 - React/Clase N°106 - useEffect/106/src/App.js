import './App.css';
import { useState, useEffect } from 'react';

/* use Effect, efectos en React (peticiones a las APIs)
   Es un metodo, una funcion */

const App = () => {

  const [personajes, setPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);

  /* Nos permite determinar que un codigo se va a ejecutar solo en algunas ocasiones */
  /* En JS: click pagina siguiente, click boton enviar formulario, click personajes F o M, cuando se busca un nombre  */

    /* useEffect(() => {

      fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setPersonajes(data.results));

    }, [])  */
    /* recibe dos parametros obligatorios*/
    /* el primero es una funcion (el efecto)
      el segundo es un array (array de dependencias) impide el loop infinito */

    /* Segundo ejemplo */

    useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/${busqueda}`)
      .then((res) => res.json())
      .then((data) => setResultados(data.results ? data.results : []))
    }, [busqueda])
    
    const handleClickPersonajes = () => {
      setBusqueda("character");
    }

    const handleClickEpisodios = () => {
      setBusqueda("episode");
    }

  return (
    <div className='App'>
      <button onClick={handleClickPersonajes}>Buscar personajes</button>
      <button onClick={handleClickEpisodios}>Buscar episodios</button>
      {resultados.map((resultado) => (
        <h4>{resultado.name}</h4>
      ))
      }
    </div>
  )

  /* Tercer ejemplo */
  
  /* const [busqueda, setBusqueda] = useState("");
  const [loading, setLoading] = useState(false);
  
   useEffect(() => {
    // nos permite determinar que un codigo se va a ejecutar
    // solo en algunas ocasiones
    setLoading(true);
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}`)
      .then((res) => res.json())
      .then((data) => {
        setPersonajes(data.results);
        setLoading(false);
      });
  }, [busqueda]);

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
  };

  const handleClick = () => {
    setBusqueda(valorDelInput);
  };

  console.log("valor del input:", valorDelInput);
  console.log("busqueda:", busqueda);
  return (
    <div className="App">
      <div>
        {loading && <h1>CARGANDO</h1>}
        <h2>Personaje buscado: {valorDelInput}</h2>
        <input type="text" onChange={handleChange}></input>
        <button onClick={handleClick}>Buscar</button>
      </div>
      <div>
        {personajes.map((personaje) => (
          <Card name={personaje.title} img={personaje.thumbnail} />
        ))}
      </div>
    </div>
     */

}

export default App;