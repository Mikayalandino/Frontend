import { useState } from "react";
import "./App.css";

const App = () => {
  // const [color, setColor] = useState("rojo");
  // const [mensajeDelBoton, setMensajeDelBoton] = useState("Poner fondo azul")

  // const handleClick = () => {
  //   color === "rojo" ? setColor("azul") : setColor("rojo");
  //   mensajeDelBoton === "Poner fondo rojo"
  //     ? setMensajeDelBoton("Poner fondo azul")
  //     : setMensajeDelBoton("Poner fondo rojo")
  // }

  // - form
  //   - input
  //   - checkbox
  //   - select
  //   - radio
  //   - submit
  // - boton
  // - link

  // - cualquier elemento que escuche un evento

  const [valorDelInput, setValorDelInput] = useState("");
  const [valorDelCheckbox, setValorDelCheckbox] = useState("NO");
  const [valorDelSelect, setValorDelSelect] = useState("");
  const [valorDelRadio, setValorDelRadio] = useState("");
  const [mostrarTarjeta, setMostrarTarjeta] = useState(false);

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
  };

  const handleChangeCheckbox = (e) => {
    e.target.checked ? setValorDelCheckbox("SI") : setValorDelCheckbox("NO");
  };

  const handleChangePais = (e) => {
    setValorDelSelect(e.target.value);
    if (e.target.value === "arg") {
      setValorDelSelect("Argentina");
    }
    if (e.target.value === "bra") {
      setValorDelSelect("Brasil");
    }
    if (e.target.value === "chi") {
      setValorDelSelect("Chile");
    }
  };

  const handleChangeRadio = (e) => {
    setValorDelRadio(e.target.value);
    if (e.target.value === "gato") {
      setValorDelRadio("Gato");
    }
    if (e.target.value === "perro") {
      setValorDelRadio("Perro");
    }
  };

  const handleSumbit = (e) => {
    e.preventDefault();
  };

  const handleClickMostrarTarjeta = () => {
    setMostrarTarjeta(true)
  }

  const handleClickCerrarTarjeta = () => {
    setMostrarTarjeta(false)
  }

  return (
    <div>
      {/* <div className={color}>
      <button onClick={handleClick}>{mensajeDelBoton}</button>
    </div> */}

      {mostrarTarjeta && <div>HOLA CHICAS</div>}
      <button onClick={handleClickMostrarTarjeta}>Mostrar tarjeta</button>
      <button onClick={handleClickCerrarTarjeta}>Cerrar tarjeta</button>

      <form onSubmit={handleSumbit}>
        <input type="text" name="nombre" onChange={handleChange} />

        <p>
          Valor del input: <span>{valorDelInput}</span>
        </p>

        <label>
          Terminos y condiciones
          <input
            type="checkbox"
            name="terminos"
            onChange={handleChangeCheckbox}
          />
        </label>

        <p>
          Acepta terminos y condiciones: <span>{valorDelCheckbox}</span>
        </p>

        {/* Ejercicios 101 */}

        <label>
          Pais
          <select onChange={handleChangePais}>
            <option value="arg">Argentina</option>
            <option value="bra">Brasil</option>
            <option value="chi">Chile</option>
          </select>
        </label>

        <p>
          Pais elegido: <span>{valorDelSelect}</span>
        </p>

        <label>
          <input
            onChange={handleChangeRadio}
            type="radio"
            name="animal"
            value="gato"
          />
          Gato
          <input
            onChange={handleChangeRadio}
            type="radio"
            name="animal"
            value="perro"
          />
          Perro
        </label>

        <p>
          Animal elegido: <span>{valorDelRadio}</span>
        </p>
        <input type="submit" value="Enviar"></input>
      </form>
    </div>
  );
};

export default App;
