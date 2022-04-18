import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Main from './Main';
import NewMovies from './NewMovies';
import Popular from './Popular';
import beieza from "./assets/beieza.jpg"

const App = () => {
  return (
    <div>

    <img src={beieza} />
    {/* // componentes de vista / componentes contenedores:
    componentes encargados de generar la vista de una pagina, la estructura general
    llaman a otros componentes para formar estructura
    y les dan la informacion que necesitan --> se encargan del fetch

    Si tienen ganas de investigar alternativas, lean sobre 
    HIGHER ORDER COMPONENTS
    o HOC 

    // componentes funcionales  */}

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Main />}></Route>
    <Route path="/new" element={<NewMovies />}></Route>
    <Route path="/popular" element={<Popular />}></Route>
  </Routes>
</BrowserRouter>
    </div>
  );
};

export default App;
