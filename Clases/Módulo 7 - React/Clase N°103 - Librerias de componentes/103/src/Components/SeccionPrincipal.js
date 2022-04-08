import { useState } from "react";
import "../Styles/SeccionPrincipal.css";
import Button from "./Button";
import Modal from "./Modal";

const SeccionPrincipal = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  
  const handleClick = () => {
    setMostrarModal(true)
  }

  const handleClickCerrarModal = () => {
      setMostrarModal(false)
  }

  return (
    <div className="seccion">
      <Button 
        clase="rojo"
        mensaje="Abrir Modal" 
        reaccionarAlClick={handleClick}
      />
        {mostrarModal && 
            <Modal 
                cerrarModal={handleClickCerrarModal}/>
        }
    </div>
  );
};

export default SeccionPrincipal;
