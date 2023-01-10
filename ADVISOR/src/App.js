import React from 'react'
import { AppProvider } from './Context'
import Game from './Game'


const App = () => {
  return (
    <AppProvider>
 <Game/>
 </AppProvider>
   
  )
}

export default App
