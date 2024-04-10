import {} from 'react'
import MiComponente from './componets/MiComponente'
import MyContextProvider from './componets/UseContext/MyContextProvider'

function App() {

  return (
    <>
      <MyContextProvider>
        <MiComponente/>
      </MyContextProvider>

    </>
  )
}

export default App
