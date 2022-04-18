import { useContext } from "react"
import UserContext from "../context/UserContext"

const Button = ({ title }) => {

  // un hijo puede modificar el contexto
  // si y solo si hay un estado definido en el componente padre 

  const usuario = useContext(UserContext)

  const handleClick = () => {
    usuario.setIsEminent(true)
  }
  
  return (
    <button 
      className={usuario.isEminent ? "boton-azul" : "boton-rojo"}
      onClick={handleClick}
      >
      {title}
    </button>
  )
}

export default Button
