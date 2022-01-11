import "./App.css";
import CardContainer from "./CardConteiner";

// JSX: es una mezcla de JS y HTML. Me permite usar funcionen que retornan html, pero con todas las funcionaledades de JS(variables, condicionales, etc...)

// Usamos "className" en lugar de "class"

const App = () => {
  
  const nombre = "Mika"

  return (
    <div className="contenedor">
      <h1>Hola {nombre}</h1>
      <CardContainer></CardContainer>
    </div>
  )
}

export default App;