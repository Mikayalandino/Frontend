import "../Styles/Card.css";
import { useState } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";

const Card = ({ nombre, precio, descripcion }) => {

    const [ mostrarDescripcion, setMostrarDescripcion] = useState(false)

    const handleMouseEnter = () => {
        setMostrarDescripcion(true)
    }

    const handleMouseLeave = () => {
        setMostrarDescripcion(false)
    }

    return (
        <article className="card" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <h2>{nombre} <BsFillCartCheckFill /> </h2>
            <p>{precio}</p>
            {mostrarDescripcion &&
                <p>{descripcion}</p>
            }
        </article>
    )
}

export default Card;