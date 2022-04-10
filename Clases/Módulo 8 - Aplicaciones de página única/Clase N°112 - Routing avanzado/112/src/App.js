import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import Personajes from "./Components/Personajes";
import Epiodios from "./Components/Epiodios";
import Ubicaciones from "./Components/Ubicaciones";
import NavBar from "./Components/NavBar";
import DetallePersonaje from "./Components/DetallePersonaje"
import Error404 from './Components/Error404';

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
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;