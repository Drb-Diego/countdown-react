import React from "react";
import "../styles/cardModal.scss"
import SelectTime from "./SelectTime";

export default function CardModal({closeModal}) {

  return (
    <div className="card-container-modal">
     <div className="modal-container">
       <button className="close-modal" onClick={() => closeModal(false)}>
         Fechar
        </button>
       <div className="content">
          <SelectTime label="Horas"/>
          <SelectTime label="Minutos"/>
          <SelectTime label="segundos"/>
       </div>

       <button className="apply-timer">Aplicar o tempo</button>
     </div>
    </div>
  );
}
