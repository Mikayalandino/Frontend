import { Link } from "react-router-dom";
import "../Style/NavBar.css"

const NavBar = () => {
    return (
      <div>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/personajes">Personajes</Link></li>
              <li><Link to="/epiodios">Episodios</Link></li>
              <li><Link to="/ubicaciones">Ubicacione</Link>s</li>
          </ul>
      </div>
    )
  }
  
  export default NavBar;
  