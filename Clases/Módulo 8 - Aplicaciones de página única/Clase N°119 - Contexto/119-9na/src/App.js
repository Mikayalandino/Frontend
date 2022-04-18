import './App.css';
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import UserContext from "./context/UserContext"
import { useState } from "react"


// PROPS DRILLING vs CONTEXT o ESTADO GLOBAL  

//                   App.js 
//    Nav            Main          Footer
//                   Card         Button
//                   Button 

// proveedor --> dice que informacion vamos a tener
// consumidor --> lea la informacion que le pasa el proveedor

// si el usuario no esta logeado, quiero mostrar en la nav un boton que diga login
// si el usuario esta logeado y NO es eminent, quiero mostrar los botones rojos
// si el usuario esta logeado y SI es eminent, quiero mostrar los botones azules 

function App() {

  const [isEminent, setIsEminent] = useState(false)

  const handleChange = (e) => {
    setIsEminent(e.target.checked)
  }

  console.log(isEminent)

  const usuario = {
    nombre: "Yanina", 
    apellido: "Bucca", 
    edad: 22, 
    isEminent: isEminent,
    setIsEminent: setIsEminent
  }

  return (
    <div className="App">
    <UserContext.Provider value={usuario}>

    <label>Convertirme en eminent</label>
    <input type="checkbox" checked={isEminent} onChange={handleChange}/>

      <Nav />
      <Main />
      <Footer />
    </UserContext.Provider>
    </div>
  );
}

export default App;
