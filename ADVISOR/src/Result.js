import React, { useContext } from 'react'
import { AppContext } from './Context'

const Result = () => {
    const {won,reset} = useContext(AppContext)
   
  return (
    <>
    
    <div className="scorebord">

<p>PLAYER {won} WON</p>
<button id='reset' onClick={()=> reset()}>play again</button>

    </div>
    
    
    
    </>
  )
}

export default Result
