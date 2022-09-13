import React, { useEffect, useState } from "react";

import { AiFillCloseCircle } from 'react-icons/ai'

import './styles.css'

import api from '../../services/api'

function CreatePopup({setTrigger, trigger, tasks, setTasks}) {
    const [description, setDescription] = useState('')
    const [duedate, setDuedate] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        const date = new Date(duedate)
        const isoDate = date.toISOString()

        const response = await api.post('/todolist', {
            description: description,
            duedate: isoDate
        })
        setTrigger(false)
        setDescription('')
        setDuedate('')
        let data = tasks
        data.push(response.data)
        setTasks(data)

    }

    useEffect(() => {
        function enableSubmitButton() {
            if (trigger) {
                let button = document.getElementById('submit-button')
                button.style.background = '#89d8ea'
                if (description && duedate) {
                    button.style.background = '#309cb4'
                    button.style.color = '#FFF'
                }
            }
        }

        enableSubmitButton()
    }, [description, duedate, trigger])

    return (trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <strong>Nova Tarefa</strong>
                <div className="close-btn" onClick={() => {
                    setTrigger(false)
                    setDescription('')
                    setDuedate('')

                    }}>
                    <AiFillCloseCircle />
                </div>
                <form onSubmit={handleSubmit}>
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
                        id="submit-button"
                        type="submit"
                        className="save-button">
                        Salvar
                    </button>

                </form>
            </div>
        </div>
    ) : ""

}

export default CreatePopup