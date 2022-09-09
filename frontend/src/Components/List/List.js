import React from "react";

import { BiTrash } from 'react-icons/bi'
import { BsPencilSquare } from 'react-icons/bs'

import './List.css'

function List() {
    return (
        <>
            <li className='todolist-infos'>
                <div>
                    <strong>Fazer Compras</strong>
                    <div className="icons">
                        <div>
                            <BiTrash />
                        </div>
                        <div>
                            <BsPencilSquare />
                        </div>
                    </div>
                </div>
                <textarea>
                    Alguma coisa escrita
                </textarea>
                <span>
                    !
                </span>
            </li>
            <li className='todolist-infos'>
                <div>
                    <strong>Fazer Compras</strong>
                    <div>
                        x
                    </div>
                </div>
                <textarea>
                    Alguma coisa escrita
                </textarea>
                <span>
                    !
                </span>
            </li>
            <li className='todolist-infos'>
                <div>
                    <strong>Fazer Compras</strong>
                    <div>
                        x
                    </div>
                </div>
                <textarea>
                    Alguma coisa escrita
                </textarea>
                <span>
                    !
                </span>
            </li>
            <li className='todolist-infos'>
                <div>
                    <strong>Fazer Compras</strong>
                    <div>
                        x
                    </div>
                </div>
                <textarea>
                    Alguma coisa escrita
                </textarea>
                <span>
                    !
                </span>
            </li>
            <li className='todolist-infos'>
                <div>
                    <strong>Fazer Compras</strong>
                    <div>
                        x
                    </div>
                </div>
                <textarea>
                    Alguma coisa escrita
                </textarea>
                <span>
                    !
                </span>
            </li>
        </>
    )
}

export default List