import React, { useEffect, useState } from "react";

import { BiTrash } from 'react-icons/bi'
import { MdSdStorage } from 'react-icons/md'


import api from "../../services/api";

import './styles.css'
import Done from "../Done";

function Tasks({ data, setTrigger, setId, getAllTasks}) {
    const [newData, setNewData] = useState(data)
    const [date, setDate] = useState(newData.duedate ? newData.duedate.split('T')[0] : data.duedate.split('T')[0])
    const [description, setDescription] = useState(newData.description ? newData.description : data.description)
    const [done, setDone] = useState(newData.description ? newData.done : data.done)
    const [newDate, setNewDate] = useState('')
    const [newDescription, setNewDescription] = useState('')

    useEffect(() => {
        setNewData(data)
        setDate(newData.duedate ? newData.duedate.split('T')[0] : data.duedate.split('T')[0])
        setDescription(newData.description ? newData.description : data.description)
        setDone(newData.description ? newData.done : data.done)
    }, [data, newData])

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

            getAllTasks()
        }


    }

    async function handleDone(id) {
        if (id) {
            const response = await api.post(`/done/${id}`)
            if (response) {
                setNewData(response.data)
                getAllTasks()
            }
        }
    }

    async function handleHide(id) {
        if (id) {
            const response = await api.post(`/hide/${id}`)
            if (response) {
                setNewData(response.data)
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
                    defaultValue={date}
                    disabled={done}
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
                                if (done) {
                                    handleHide(newData._id ? newData._id : data._id)
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
                defaultValue={description}
                disabled={done}
                onChange={e => setNewDescription(e.target.value)}
                onBlur={e => handleSave(e.target)}
            />
            
            <Done done={done}
            handleDone={handleDone}
            setDone={setDone}
            id={newData._id ? newData._id : data._id}></Done>
        </>

    )

}

export default Tasks