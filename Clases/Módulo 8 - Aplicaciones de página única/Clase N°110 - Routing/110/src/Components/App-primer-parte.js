import "./App.css";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Contacto from "./Components/Contacto"
import { useState } from "react";


const App = () => {

  const [paginaAMostrar, setPaginaAMostrar] = useState('home')

  const handleClick = (pagina) => setPaginaAMostrar(pagina)

 /* SPA
    Single Page Application
    Aplicaciones de pagina unica  */

  return (
    <div>
      <nav>
        <ul>
          <li onClick={() => handleClick("home")}>Home</li>
          <li onClick={() => handleClick("blog")}>Blog</li>
          <li onClick={() => handleClick("contacto")}>Contacto</li>
        </ul>
      </nav>
       
      {paginaAMostrar === "home" && <Home />}
      {paginaAMostrar === "blog" && <Blog />}
      {paginaAMostrar === "contacto" && <Contacto />}
      
    </div>
  )
}

export default App;
