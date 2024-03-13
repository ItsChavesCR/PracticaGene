import React from 'react'
import Componente2 from './Componente2'

const Componente1 = ({text = ''}) => {

  return (
    <>
    <h1>{text}</h1>
    <Componente2 text= {text}/>
    </>
  )
}

export default Componente1