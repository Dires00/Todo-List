import React from "react";

import { BiTrash, BiCheckDouble } from 'react-icons/bi'
import { BsPencilSquare } from 'react-icons/bs'
import { VscError } from 'react-icons/vsc'
import { MdSdStorage } from 'react-icons/md'

import './styles.css'

function List({ data, duedate='' }) {
    const date = duedate.split("T")[0]
    const dateSplited = date.split("-") 
    const localDate = dateSplited[2]+ "/"+ dateSplited[1] + "/"+ dateSplited[0]
    return (
        <>
            <div>
                <strong>{localDate}</strong>
                <div className="icons">
                    <div>
                        <BiTrash />
                    </div>
                    <div>
                        <BsPencilSquare />
                    </div>
                    <div>
                        <MdSdStorage/>
                    </div>
                </div>
            </div>
            <textarea defaultValue={data.description}></textarea>
            <span className="done-icon">{data.done ? <BiCheckDouble className="icon-check"/> : <VscError className="icon-cross"/>}</span>
            <span className="done-text">{data.done ? "Finalizada" : "Aberta"}</span>

        </>

    )
}

export default List