import React, { useEffect, useState } from 'react';

import { BiCheckDouble } from 'react-icons/bi'
import { VscError } from 'react-icons/vsc'



function Done({ done, setDone, handleDone, id }) {
    const [dn, setDn] = useState(done)
    
    useEffect(() => {
        console.log('Executei o useEffects')
        setDn(done)
    }, [done, id])
    
    return (dn) ? (<>

        <span className="done-icon"
            onClick={() => {
                handleDone(id) 
                setDn(!done)
                setDone(!done)
            }}
        >
            <BiCheckDouble className="icon-check" />
        </span>

        <span className="done-text">Finalizada</span>
    </>) : (<>
        <span className="done-icon"
            onClick={() => {
                setDn(!done)
                setDone(!done)
                handleDone(id)
            }}
        >
            <VscError className="icon-cross" />
        </span>

        <span className="done-text">Aberta</span>

    </>)
}

export default Done