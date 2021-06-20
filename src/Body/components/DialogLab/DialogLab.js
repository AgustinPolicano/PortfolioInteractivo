import React, { useEffect, useState } from 'react'
import "./DialogLab.scss";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import gifFace from "../../../assets/img/gifFace.gif";
import velaImg from "../../../assets/img/velaImg.png";
import velaGif from "../../../assets/img/velaGif.gif";



export const DialogLab = () => {



    const [showResults, setShowResults] = useState(true)



    const onClick = () => setShowResults(false)
    return (

        <div>


            <div style={{ display: showResults ? "none" : "flex" }}>
                <img src={velaImg} className="velaImg" />
            </div>


            <div className="wrapper" style={{ display: showResults ? "flex" : "none" }}  >

                <div className="pixelDialog">
                    <div className="d-flex justify-content-around">
                        <div className="p-2 bd-highlight flex-fill">
                            <img src={gifFace} className="gifFace" />
                        </div>
                        <div className="p-3 bd-highlight textDialog flex-fill">
                            <div className="typewriter">
                                <h1>¿Como has llegado hasta aqui forastero? ¿De que tierras provienes?  Bueno </h1>
                            </div>

                            <div className="typewriter2">
                                <h1>eso realmente no tiene mucha importancia dada la situacion en la que nos  </h1>
                            </div>

                            <div className="typewriter3">
                                <h1>encontramos, estate atento con la luz que proviene de las velas, ellas te </h1>
                            </div>

                            <div i className="typewriter4">
                                <h1> guiaran hacia la salida, no todos pueden lograr escapar del laberinto<i className="ellipsis"><i>.</i><i>.</i><i>.</i></i> </h1> <br></br>
                            </div>

                            <div className="typewriter5 text-center">
                                <button className="buttonclear" onClick={onClick}> <h1>(Pulsa aqui para continuar)</h1> </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>

    )
}


export default DialogLab
