import React from 'react'

type MyContextType = {
    counter: number;
    setCounter: (counter: number) => void;
    showConfirm: () => void;
    subTitle: string
}

export const MyContext = React.createContext<MyContextType>({
    counter: 0,
    setCounter: ()=>{},
    showConfirm: ()=>{},
    subTitle: ''
});