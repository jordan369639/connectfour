import React, { useContext } from 'react'
import { AppContext } from './Context'
import plvspl from "./ images/plvspl.svg"
const Homepage = () => {
    const {setGameMode,showRule} = useContext(AppContext);
  return (
    <>
    
    <div className="homepage">

       <div className="homemenu">

<button className='gamemode' onClick={()=> setGameMode("player")}> <p>PLAYER VS PLAYER
    
  
    
    </p> </button>
<button className='gamemode' onClick={()=> showRule()}><p>Game rule</p></button>

       </div>
       <div className="gameplay">
        <h1>RULE</h1>
        <h2>Objective</h2>
        <p className='gamerule'>Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).</p>
        <h2>HOW TO PLAY</h2>
        <ul>


          <li>Red goes first in the first game.</li>
          <li>Players must alternate turns, and only one disc can be dropped in each turn.</li>
          <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
          <li>The starter of the previous game goes second on the next game.</li>
        </ul>
        <div className="check">
        <i className="fa-regular fa-circle-check fa-5x " id='readrule' onClick={()=> showRule()}></i>
        </div>
        </div>
      
       

    </div>
    
    
    
    
    </>
  )
}

export default Homepage
