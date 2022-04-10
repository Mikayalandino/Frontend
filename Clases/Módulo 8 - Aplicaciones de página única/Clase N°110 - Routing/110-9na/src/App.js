import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Blog from "./components/Blog"
import Blog1 from "./components/Blog1"
import Blog2 from "./components/Blog2"
import Contacto from "./components/Contacto"
import Home from "./components/Home"

const App = () => {
  return (
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/blog/:variable" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />}/>
        </Routes>

        <footer>
        {/* // links a paginas externas usan a */}
          <a href="https://www.twitter.com">Visita mi twitter</a>
        </footer>
      </BrowserRouter>
  )
}

export default App
