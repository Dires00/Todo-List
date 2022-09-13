import React, { useState } from "react";

import { BiTrash, BiCheckDouble } from 'react-icons/bi'
import { VscError } from 'react-icons/vsc'
import { MdSdStorage } from 'react-icons/md'


import api from "../../services/api";

import './styles.css'

function List({ data, setTrigger, setId }) {
    const [newData, setNewData] = useState(data)
    let date = newData.duedate ? newData.duedate : data.duedate
    let done
    if (typeof date === 'string') {
        date = date.split('T')[0]
    }

    const [newDate, setNewDate] = useState('')
    const [newDescription, setNewDescription] = useState('')

    async function handleSave(e) {
        if (!data.done) {
            if (newDate && newDate !== date && newDescription && newDescription !== data.description) {
                const duedate = new Date(newDate)
                const isoDate = duedate.toISOString()
                await api.post(`/content/${data._id}`, {
                    description: newDescription,
                    duedate: isoDate
                })

            }

            else if (newDate && newDate !== date) {
                console.log('entrei data')
                const duedate = new Date(newDate)
                const isoDate = duedate.toISOString()
                await api.post(`/content/${data._id}`, {
                    description: data.description,
                    duedate: isoDate
                })
            }

            else if (newDescription && newDescription !== data.description) {
                await api.post(`/content/${data._id}`, {
                    description: newDescription,
                    duedate: data.duedate
                })
            }
        }


    }

    async function handleDone(id) {
        if (id) {
            const response = await api.post(`/done/${id}`)
            if (response) {
                setNewData(response.data)
            }
        }
    }

    async function handleHide(id) {
        if (id) {
            const response = await api.post(`/hide/${id}`)
            if (response) {
                setNewData(response.data)
                window.location.reload(true)

            }
        }
    }
    return (
        <>
            <div>
                <input
                    className="date"
                    type={"date"}
                    defaultValue={date}
                    onChange={e => setNewDate(e.target.value)}
                    onBlur={e => handleSave(e.target)}

                />

                <div className="icons">
                    <div>
                        <BiTrash
                            onClick={() => {
                                setTrigger(true)
                                setId(newData._id ? newData._id : data._id)
                            }}
                        />
                    </div>
                    <div>
                        <MdSdStorage
                            onClick={() => {
                                done = newData.description ? newData.done : data.done
                                if (done) {
                                    handleHide(newData._id ? newData._id : data._id)
                                }
                                window.alert('A tarefa deve estar finalizada!')
                            }}
                        />
                    </div>
                </div>
            </div>
            <textarea
                className="description"
                defaultValue={newData.description ? newData.description : data.description}
                onChange={e => setNewDescription(e.target.value)}
                onBlur={e => handleSave(e.target)}
            />
            {done = newData.description ? newData.done : data.done}
            <span className="done-icon"
                onClick={() => { handleDone(newData._id ? newData._id : data._id) }}

            >{done ? <BiCheckDouble className="icon-check" /> : <VscError className="icon-cross" />}</span>
            <span className="done-text">{done ? "Finalizada" : "Aberta"}</span>
        </>

    )

}

export default List