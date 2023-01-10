import React from 'react'
import style from "./style.css"
import mark1 from "./ images/Marker1.svg"
import mark2 from "./ images/Marker2.svg"
import Cell from './Cell'
import { useContext } from 'react'
import { AppContext } from './Context'
import { useEffect } from 'react'
import Result from './Result'
import Timer from './Timer'
const BORD = () => {
const create = useContext(AppContext);


useEffect(() => {
 create.resettimer();
  create.fn();

}, [create.state]);







  return (
    <>
    
    
      <div className="bordarea">
<div className="menuitems">
  <button id='menu' onClick={()=> create.pauseMenu()}>MENU</button>

  
  <div className="pausemenu">

    <button className='menubtn' id='continue' onClick={()=> create.resume()}>continue</button>
    <button className='menubtn' id='newgame' onClick={()=> create.newgame()}>start new game</button>
  </div>
  <button id='restart' onClick={()=> create.reset()}>RESTART</button>
</div>
        <div className="players">
          <div className="player">
<p>player 1</p>
<span>{create.player1}</span>

          </div>
          <div className="player2">
          <p>player 2</p>
<span>{create.player2}</span>
          </div>
          
        </div>
        <div className="locator">
         <img src={ create.player ? mark1: mark2} alt="" />
          </div>

        <div className='container'>
          {
           create.create().map((curr,index)=>{

              return(
                <div className="box"
                key={index}
                onMouseOver={()=>create.handlepointer(index)}
                onClick={(e)=> create.placebet(index)}
                id={index}
                
                
                
                
                ></div>
              )
            })
          }
     
        </div>
<div className="footer">
 {
  create.winner == true ? <Result/>:<Timer player={create.player}/>
 }
</div>
      </div>

    </>
  )
}

export default BORD
