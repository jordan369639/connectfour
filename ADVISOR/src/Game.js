import React, { useContext } from 'react'
import BORD from './BORD';
import { AppContext } from './Context'
import Homepage from './Homepage';

const Game = () => {
    const player = useContext(AppContext);
  return (
   <>
   {
    player.mode == "player" ? <BORD/>:<Homepage/>
   }
   
   
   </>
  )
}

export default Game
