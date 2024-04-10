import React, { ReactNode, useState } from 'react'
import { MyContext } from './Mycontext'

const MyProvider = ({children}:{children: ReactNode}) => {

const [counter, setCounter] = useState(1)

const showConfirm = () =>{
    confirm('HOla wenas');
}

    const subTitle = 'SOY UN SUBTITULO';


  return (
    <MyContext.Provider value ={{counter,setCounter,showConfirm, subTitle}}> 
        {children}
    </MyContext.Provider>
  )
}

export default MyProvider