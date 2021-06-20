import React, { useState } from 'react'
import "./DialogCarga.scss";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DialogCarga = (props) => {

    const [modal, setModal] = useState(true);
  

    return (
      <div>
          <div>
        <Modal className="centered" isOpen={modal} >
       
          <ModalBody >
              <div>
            <p>Bienvenidos a todos soy <a className="hover-underline-animation" href="https://www.linkedin.com/in/agustin-policano/" target="blank">Agustin Policano</a> creador de 
           este Portfolio Interactivo.
            Gracias por pasarte por acá  y espero que lo disfrutes tanto como yo
            disfrute haciendolo :D </p>

            <a href="/Lab"><button className="btn-empezamos">Empezamos?</button></a>
            </div>
          </ModalBody>

        
        </Modal>

           
    
        </div>
      </div>
    );
  }

export default DialogCarga
