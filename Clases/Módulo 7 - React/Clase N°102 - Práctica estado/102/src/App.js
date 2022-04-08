import "./App.css";
import { useState } from "react";
import Card from "./Components/Card"
import CarouselLocal from "./Components/CarouselLocal"
import { Gi3DGlasses } from "react-icons/gi";
import { FaBeer } from "react-icons/fa";

const App = () => {
  const [mostrarModalPrincipal, setMostrarModalPrincipal] = useState(false);
  const [mostrarModaTerminos, setMostrarModalTerminos] = useState(true);

  const handleClick = () => {
    setMostrarModalPrincipal(true);
  };

  const handleClickAbrirModalTerminos = () => {
    setMostrarModalTerminos(true);
  };

  const handleClickCerrarModal = () => {
    setMostrarModalPrincipal(false);
  };

  const handleClickCerrarModalTerminos = () => {
    setMostrarModalTerminos(false)
  }

  const gatos = [
    {
      nombre: "Gatito triste",
      precio: 20000,
      descripcion: "Gato muy triste",
    },
    {
      nombre: "Gatito muuuy triste",
      precio: 39000,
      descripcion: "Gato muuuy triste",
    },
    {
      nombre: "Gatito algo feliz",
      precio: 500000,
      descripcion: "Gato que esta algo feliz",
    },
  ]

  return (
    <div>
      <h1>Estado <FaBeer /> </h1>

      <Gi3DGlasses />
      

      <div className="container-tarjetas">

        {gatos.map(elemento => (
          <Card 
            nombre={elemento.nombre} 
            precio={elemento.precio} 
            descripcion={elemento.descripcion}  
          />
        ))}

      </div>
      
      <CarouselLocal />

      <button onClick={handleClick}>Abrir modal Principal</button>
      <button onClick={handleClickAbrirModalTerminos}>Abrir modal Terminos</button>

      {mostrarModalPrincipal && (
        <article className="modal">
          <button onClick={handleClickCerrarModal}>X</button>
          <h2>Soy un modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            commodo augue nisi, ut tincidunt mauris finibus nec. Mauris gravida
            lectus in commodo tincidunt. Nullam eu ullamcorper est, et lobortis
            dui. Suspendisse maximus lacus a lectus ultrices sagittis. Sed
            facilisis enim et nisl efficitur volutpat. Fusce non dapibus lacus.
            Sed eu malesuada turpis, et lacinia urna. Ut dictum blandit lorem.
            Vivamus fermentum velit congue, dapibus nisi nec, aliquam nulla.
            Etiam egestas consequat justo, non sollicitudin orci fermentum ut.
            Nunc fringilla tempus risus at tempor. Donec egestas, arcu quis
            auctor rhoncus, ligula nisl dapibus elit, ut gravida justo tellus eu
            ante. Vivamus risus lectus, pretium a urna ac, euismod cursus
            ligula. Etiam mattis erat et elit sollicitudin, nec condimentum
            turpis semper. Pellentesque lacinia luctus orci vel tempor.
          </p>
        </article>
      )}
      {mostrarModaTerminos &&
        <article className="modalTerminos">
          <button onClick={handleClickCerrarModalTerminos}>X</button>
          <h2>Acepta terminos y condiciones</h2>
          <p>Si, acepto</p>
        </article>
      }
    </div>
  );
};

export default App;
