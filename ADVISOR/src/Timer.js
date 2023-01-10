import React, { useContext } from 'react'
import { AppContext } from './Context'
import { useEffect } from 'react';

const Timer = ({player}) => {
    const prop = useContext(AppContext);
    useEffect(() => {
        if(player){
      
          document.getElementsByClassName("timer")[0].classList.add("redtimer");
          document.getElementsByClassName("timer")[0].classList.remove("yellowtimer");
        }else{
      
          document.getElementsByClassName("timer")[0].classList.remove("redtimer");
          document.getElementsByClassName("timer")[0].classList.add("yellowtimer");
        }
      }, [player])
  return (
    <>
    
    <div className="timer redtimer">
    <div className="timeleft">
      <p>PLAYER {player  ? "1'S":"2'S"} TURN </p>
 <h2 id="timing"> {prop.timer} s</h2>
    </div>

    
  </div>
    
    
    </>
  )
}

export default Timer
