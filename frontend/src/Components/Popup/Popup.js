import React from "react";

import './Popup.css'
function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <strong>Nova Tarefa</strong>
                <div className="close-btn" onClick={() => props.setTrigger(false)}>
                    x
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

                    <button type='submit'>Save</button>
                </form>
            </div>
        </div>
    ) : ""
    
}

export default Popup