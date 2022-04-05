import "./Button.css"

// Desestructurar las props
// const Button = (props) => { }

const Button = ({ color, mensaje }) => {
    return (
        <button
            className={`boton ${color}`} 
            id="1">{mensaje}
         </button>
    )
}

export default Button; 