import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
/* import Nav from "./Components/Nav" */
import Home from "./Components/Home";
import Blog from "./Components/Blog";
/* import Blog1 from "./Components/Blog1";
import Blog2 from "./Components/Blog2"; */
import Contacto from "./Components/Contacto"

const App = () => {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
       {/*  <Link to="/blog/blog1">Blog1</Link>
        <Link to="/blog/blog2">Blog2</Link> */}
        <Link to="/contacto">Contacto</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:variable" element={<Blog />} />
          {/* <Route path="/blog/blog1" element={<Blog1 />}></Route>
          <Route path="/blog/blog2" element={<Blog2 />}></Route>
        </Route> */}
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <h1>App con routeo</h1>

    </BrowserRouter>

  )
}

export default App;