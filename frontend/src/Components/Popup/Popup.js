import React from "react";

import { useState } from "react";
import { AiFillCloseCircle } from 'react-icons/ai'

import './Popup.css'

import api from '../../services/api'

function Popup(props) {
    const [description, setDescription] = useState('')
    const [duedate, setDuedate] = useState('')

    async function handleSubmit(e){
        e.preventDefault()
        const date = new Date(duedate)
        const isoDate = date.toISOString()

        const response = await api.post('/todolist', {
            description: description,
            duedate: isoDate
        })

        props.setTrigger(false)
        setDescription('')
        setDuedate('')
        
    }
    
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <strong>Nova Tarefa</strong>
                <div className="close-btn" onClick={() => props.setTrigger(false)}>
                    <AiFillCloseCircle />
                </div>
                <form onSubmit= {handleSubmit}>
                    <div className='input-block'>
                        <label htmlFor='description'>Description</label>
                        
                        <textarea
                            required
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />

                    </div>

                    <div className='input-block'>
                        <label htmlFor='duedate'>Due Date</label>
                        
                        <input
                            required
                            type={"date"}
                            value={duedate}
                            onChange={e => setDuedate(e.target.value)}
                            className="duedate-input"
                            
                        />

                    </div>

                    <button
                        type="submit"
                        className="save-button">
                        Salvar
                    </button>

                </form>
            </div>
        </div>
    ) : ""

}

export default Popup