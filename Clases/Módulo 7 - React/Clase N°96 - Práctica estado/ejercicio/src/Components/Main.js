import Section from "./Section";
import "../Styles/Main.scss";

const Main = () => {
    return (
        <main>
            <div className="container">
                <Section
                    titulo="Soy el primer michi"
                    subtitulo="Miau"
                    imagen="https://placekitten.com/500"
                />
                <Section
                    titulo="Soy el segundo michi"
                    subtitulo="Miau"
                    imagen="https://placekitten.com/500"
                />
            </div>       
        </main>
    )
}

export default Main;