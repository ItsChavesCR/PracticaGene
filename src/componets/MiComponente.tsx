import React, { useContext } from 'react'
import { MyContext } from './UseContext/Mycontext';

const MiComponente = () => {

const { counter, setCounter } = useContext(MyContext);

    const suma = () => {
        setCounter(counter + 1);
    }

    return (
        <>
        <h1>{counter}</h1>
            <button onClick={suma} type='button'>Aqui se cambia el numero</button>
            
        </>
    )
}

export default MiComponente