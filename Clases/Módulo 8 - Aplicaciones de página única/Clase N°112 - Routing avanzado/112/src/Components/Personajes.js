import "../Style/Personajes.css"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((res) => res.json())
      .then((data) => setPersonajes(data.results));
  }, []);

  return (
    <div>
      <h1>Personajes</h1>
      <div className="card-container">
        {personajes.map((personaje) => (
          <Link to={`/personajes/${personaje.id}`}>
            <div className="card">
              <h2>{personaje.name}</h2>
              <h2>{personaje.status}</h2>
              <img src={personaje.image} alt={personaje.image} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Personajes;
