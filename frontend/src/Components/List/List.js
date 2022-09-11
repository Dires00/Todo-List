import React from "react";

import { BiTrash, BiCheckDouble } from 'react-icons/bi'
import { BsPencilSquare } from 'react-icons/bs'
import { VscError } from 'react-icons/vsc'

import './List.css'

function List({ data }) {

    return (
        <>
            <div>
                <strong>{data.duedate}</strong>
                <div className="icons">
                    <div>
                        <BiTrash />
                    </div>
                    <div>
                        <BsPencilSquare />
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