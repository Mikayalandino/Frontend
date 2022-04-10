import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import Personajes from "./Components/Personajes";
import Epiodios from "./Components/Epiodios";
import Ubicaciones from "./Components/Ubicaciones";
import NavBar from "./Components/NavBar";
import DetallePersonaje from "./Components/DetallePersonaje"

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/personajes/:idPersonaje" element={<DetallePersonaje />} />
        <Route path="/epiodios/:idEpiodios" element={<Epiodios />} />
        <Route path="/ubicaciones/:idUbicaciones" element={<Ubicaciones />} />
      </Routes>

    </BrowserRouter>

  )
}

export default App;