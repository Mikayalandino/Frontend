import "./App.css";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Button from "./Components/Button";

const App = () => {
  return (
    <div className="container">
      <Nav/>
      <Main/>
      <Button mensaje="Hola" color="verde"/>
      <Button mensaje="Chau" color="rojo"/>
      <Button mensaje="???" color="azul"/>
      <Footer/>
    </div>
  )
}

export default App;