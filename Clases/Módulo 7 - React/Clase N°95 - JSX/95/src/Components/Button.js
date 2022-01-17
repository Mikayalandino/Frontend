import "../Styles/Button.css"

const Button = (props) => {
    return (
        <button className={props.boton}>{props.mensaje}</button>
    )
}

export default Button;