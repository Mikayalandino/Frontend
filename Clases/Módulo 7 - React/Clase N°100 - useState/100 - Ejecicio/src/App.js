import { useState } from "react";
import "./App.css";

const App = () => {

  const [ color, setColor ] = useState("rojo");
  const [ mensajeDelBoton, setMensajeDelBoton] = useState("Poner fondo azul")

  const handleClick = () => {
    color === "rojo" ? setColor("azul") : setColor("rojo");

    mensajeDelBoton === "Poner fondo rojo" 
    ? setMensajeDelBoton("Poner fondo azul") 
    : setMensajeDelBoton("Poner fondo rojo");
    
  }

  return (
    <div className={color}>
      <button onClick={handleClick}>{mensajeDelBoton}</button>
    </div>
  )
}

export default App
