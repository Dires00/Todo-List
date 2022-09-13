import React from "react";
import './styles.css'

function DeletePopup({ trigger, setTrigger, handleDelete, id }) {
    return (trigger) ? (
        <>
            <div className="popup">
                <div className="popup-inner">

                    <div className="delete-text">
                        <strong className="delete-strong">Deseja excluir a tarefa?</strong>
                    </div>

                    <div className="buttons">
                        <button
                            className="btn"
                            onClick={() => {setTrigger(false)}}>
                            Cancelar
                        </button>
                        <button
                            className="btn"
                            onClick={() => {
                                handleDelete(id)
                            }}>
                            Continuar
                        </button>
                    </div>
                </div>
            </div>
        </>
    ) : ""
}

export default DeletePopup