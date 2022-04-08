import "./App.css";
import { useState, useEffect } from "react";
import Card from "./Components/Card";

const App = () => {
  const [personajes, setPersonajes] = useState([]);
  const [valorDelInput, setValorDelInput] = useState("");
  /* 
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]); */

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${valorDelInput}`)
      .then((res) => res.json())
      .then((data) => setPersonajes(data.results));
  }, [valorDelInput]);

/*   const handleClickPersonajes = () => {
    setBusqueda("character");
  };

  const handleClickEpisodios = () => {
    setBusqueda("episode");
  };
 */

  const handleChange = (e) => {
    setValorDelInput(e.target.value)
  }

  return (
    <div className="App">
      {/* <button onClick={handleClickPersonajes}>Buscar personajes</button>
      <button onClick={handleClickEpisodios}>Buscar episodios</button> */}
      <div>
        <h2>Personaje buscado: {valorDelInput}</h2>
        <input type="text" onChange={handleChange}></input>
      </div>

      <div>
        {personajes.map((personaje) => (
          <Card 
            name={personaje.name}
            img={personaje.image}
          />
        ))}
        </div>
      
    </div>
  );
};

export default App;
