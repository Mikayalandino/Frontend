import Button from "./Button";
import "../Styles/Section.scss";

const Section = (props) => {
    return (
        <div className="section">
            <h1>{props.titulo}</h1>
            <p>{props.subtitulo}</p>
            <img src={props.imagen}/>
            <Button/>
        </div>
    )
}

export default Section;