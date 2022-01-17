import "../Styles/Card.css"

const Card = (props) => {

    // los parametros de un componente se llaman PROPS
    
    return (
        <article className="card">
            <h2>{props.nombre}</h2>
            <p>Tarjeta</p>
            <img src={props.imagen}/>
        </article>
    )
}

export default Card;