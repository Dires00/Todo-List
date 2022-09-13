import React, { useState } from "react";

import { BiTrash, BiCheckDouble } from 'react-icons/bi'
import { VscError } from 'react-icons/vsc'
import { MdSdStorage } from 'react-icons/md'

import api from "../../services/api";

import './styles.css'

function List({ data, setTrigger, setId}) {

    let date = data.duedate
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
                        onClick={() => 
                            {setTrigger(true)
                            setId(data._id)}}
                        />
                    </div>
                    <div>
                        <MdSdStorage />
                    </div>
                </div>
            </div>
            <textarea
                className="description"
                defaultValue={data.description}
                onChange={e => setNewDescription(e.target.value)}
                onBlur={e => handleSave(e.target)}
            />
            <span className="done-icon">{data.done ? <BiCheckDouble className="icon-check" /> : <VscError className="icon-cross" />}</span>
            <span className="done-text">{data.done ? "Finalizada" : "Aberta"}</span>
        </>

    )
}

export default List