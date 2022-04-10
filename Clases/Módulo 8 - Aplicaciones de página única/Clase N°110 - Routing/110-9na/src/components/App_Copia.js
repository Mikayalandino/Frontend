import { useState } from "react"
import Home from "./components/Home"
import Blog from "./components/Blog"
import Contacto from "./components/Contacto"

const App = () => {
  const [paginaAMostrar, setPaginaAMostrar] = useState("home")

  const handleClick = (pagina) => {
    setPaginaAMostrar(pagina)
  }

  return (
    <div>
      <nav>
        <ul>
          <li onClick={() => handleClick("home")}>Home</li>
          <li onClick={() => handleClick("blog")}>Blog</li>
          <li onClick={() => handleClick("contacto")}>Contacto</li>
        </ul>
      </nav>

    {paginaAMostrar === "home" &&  <Home />}
    {paginaAMostrar === "blog" &&  <Blog />}  
    {paginaAMostrar === "contacto" &&  <Contacto />}  
      
    </div>
  )
}

export default App
