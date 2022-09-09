import React from "react";

import { AiFillCloseCircle } from 'react-icons/ai' 

import './Popup.css'
function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <strong>Nova Tarefa</strong>
                <div className="close-btn" onClick={() => props.setTrigger(false)}>
                    <AiFillCloseCircle/>
                </div>
                <form>
                    <div className='input-block'>
                        <label htmlFor='description'>Description</label>
                        <textarea></textarea>
                    </div>

                    <div className='input-block'>
                        <label htmlFor='duedate'>Due Date</label>
                        <input></input>
                    </div>

                    <button className="save-button">Save</button>
                </form>
            </div>
        </div>
    ) : ""
    
}

export default Popup