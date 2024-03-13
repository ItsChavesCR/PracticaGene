import React from 'react'

const MiComponente = ({text ='', textToPrint = ''}) => {


    const ComfirmPropt = () => {
        confirm (textToPrint);
    }

    return (
        <>
            <button onClick={ComfirmPropt} type='button'>{text}</button>
        </>
    )
}

export default MiComponente