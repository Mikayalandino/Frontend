import "./App.scss";
import Button from "./Components/Button"

/* JavaScrip puro

  Desestructuración 
  Crear variables rapidamente a partir de un objeto

const persona = {
  nombre: "Jacques",
  apellido: "Derrida",
  profesión: "Filósofo"
}

const nombre = persona.nombre // normal
const { nombre, profesión } = persona // desestructurado

console.log(nombre)
console.log(profesión) */

const App = () => {
  return (
    <div className="contenedor">
      <h1>Hola</h1>
      <Button 
        mensaje="Holis"
        color="rojo"
      />
      <Button 
        mensaje="Holis"
        color="verde"
      />
    </div>
  )
}

export default App;