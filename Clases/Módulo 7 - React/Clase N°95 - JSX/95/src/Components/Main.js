import "../Styles/Main.css";
import Card from "./Card";

const Main = () => {
    return (
        <main className="main">
            <h1>Bienvenidas a React</h1>
            <div className="tarjetas">

                <Card 
                    nombre="Mia" 
                    imagen="https://placekitten.com/300"
                />

                <Card 
                    nombre="Batman"
                    imagen="https://placekitten.com/400" 
                />

                <Card 
                    nombre="Tokio"
                    imagen="https://placekitten.com/500" 
                />

            </div>
        </main>
    )
}

export default Main;