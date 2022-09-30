import React, { useEffect, useState } from "react";

import { BiTrash } from 'react-icons/bi'
import { MdSdStorage } from 'react-icons/md'


import api from "../../services/api";

import './styles.css'
import Done from "../Done";

function Tasks({ data, setTrigger, setId, getAllTasks}) {
    const [date, setDate] = useState(data.duedate.split('T')[0])
    const [description, setDescription] = useState(data.description)
    const [done, setDone] = useState(data.done)
    const [newDate, setNewDate] = useState('')
    const [newDescription, setNewDescription] = useState('')

    useEffect(() => {
        setDate(data.duedate.split('T')[0])
        setDescription(data.description)
        setDone(data.done)
    }, [data])

    async function handleSave() {
        console.log('salvando...\n Data: ' + newDate)
        if (!done) {
            console.log('date: ' + date)

            if (newDate && newDate !== data.duedate.split('T')[0]) {
                console.log('atualizei a data')
                const duedate = new Date(newDate)
                const isoDate = duedate.toISOString()
                const response = await api.post(`/content/${data._id}`, {
                    description: data.description,
                    duedate: isoDate
                })
                console.log("responseUpdate: "+ response.data)
            }

            else if (newDescription && newDescription !== data.description) {
                console.log('atualizei a description')
                await api.post(`/content/${data._id}`, {
                    description: newDescription,
                    duedate: data.duedate
                })
            }
            setNewDate('')
            setNewDescription('')
        }
        


    }

    async function handleDone(id) {
        if (id) {
            const response = await api.post(`/done/${id}`)
            if (response) {
                getAllTasks()
            }
        }
    }

    async function handleHide(id) {
        if (id) {
            const response = await api.post(`/hide/${id}`)
            if (response) {
                getAllTasks()
            }
        }
    }

    return (
        <>
            <div>
                <input
                    className="date"
                    type={"date"}
                    value={date}
                    disabled={done}
                    onChange={e => {
                        setNewDate(e.target.value)
                        setDate(e.target.value)
                    }}
                    onBlur={e => {
                        handleSave(e.target)
                    }}

                />

                <div className="icons">
                    <div>
                        <BiTrash
                            onClick={() => {
                                setTrigger(true)
                                setId(data._id)
                            }}
                        />
                    </div>
                    <div>
                        <MdSdStorage
                            onClick={() => {
                                if (done) {
                                    handleHide(data._id)
                                } else {
                                    window.alert('A tarefa deve estar finalizada!')
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
            <textarea
                className="description"
                value={description}
                disabled={done}
                onChange={e => {
                    setNewDescription(e.target.value)
                    setDescription(e.target.value)
                }}
                onBlur={e => handleSave(e.target)}
            />
            
            <Done done={done}
            handleDone={handleDone}
            setDone={setDone}
            id={data._id}></Done>
        </>

    )

}

export default Tasks