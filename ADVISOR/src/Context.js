import {createContext, useState } from "react";
import { useEffect } from "react";
const AppContext = createContext();
let redarr = [];
let greenarr = [];
let refresh = false;
const AppProvider = ({children})=>{

  const [state , setstate] = useState(Array(42).fill(null));
  const [player,setplayer] = useState(true);
  const [timer ,settimer]= useState(30);
  const [winner,setwinner] = useState(false);
  const [won,setwon] = useState("");
  const [player1 ,setplayer1] = useState(0);
  const [player2, setplayer2] = useState(0);
  const [menu ,setmennu] = useState(false);
  const [mode ,setmode] = useState("");

  const setGameMode = ()=>{
    setmode("player")
  }




const create = ()=>{
    const divArr = [];
    for (let i = 0; i < 42; i++) {
      const div = document.createElement("div");
      divArr.push(div);
    }
    return divArr;
}

const pauseMenu = ()=>{
  setmennu(true);
  document.getElementsByClassName("pausemenu")[0].style.display = "flex"
}
const resume = ()=>{

  setmennu(false);
  document.getElementsByClassName("pausemenu")[0].style.display = "none"


}

const resettimer = ()=>{
  settimer(30);
}

const Timesout = (player)=>{

  setwinner(true);
 player == "red" ? setplayer1(player1 + 1): setplayer2(player2 + 1);
 setwon(player== "red"? "1":"2");



}

useEffect(() => {
let interval = null;
  if(winner == false && !menu){
     interval = setInterval(() => {
      if (player ) {
       settimer(timer- 1);
      }
      if(timer == 0){
       
        clearInterval(interval);
     Timesout("green")
       
      }
    }, 1000);

  }
  

  return () => {
    clearInterval(interval);
  };
}, [timer,winner,menu]);

useEffect(() => {
  let interval = null;
if(winner == false && !menu){
   interval = setInterval(() => {
    if (!player ) {
     settimer(timer- 1);
     if(timer == 0){
      clearInterval(interval);
   Timesout("red");
     }
    
    }
  }, 1000);
}

  return () => {
    clearInterval(interval);
  };
}, [timer,winner,menu]);




const showRule = ()=>{

  document.getElementsByClassName("gameplay")[0].classList.toggle("hide");
  document.getElementsByClassName("homemenu")[0].classList.toggle("show");
}






const handlepointer = (index)=>{
  
if(index == 0 || index % 7 == 0 ){
  document.getElementsByClassName("locator")[0].style.left = "31.5rem"
}else if(index == 1 || (index - 1) % 7 == 0){
  document.getElementsByClassName("locator")[0].style.left = "35.5rem"


}else if(index == 2 || (index - 2) % 7 == 0){
  document.getElementsByClassName("locator")[0].style.left = "39.5rem"


}else if(index == 3 || (index - 3) % 7 == 0){
  document.getElementsByClassName("locator")[0].style.left = "43.5rem"


}else if(index == 4 || (index - 4) % 7 == 0){
  document.getElementsByClassName("locator")[0].style.left = "47.5rem"


}else if(index == 5 || (index - 5) % 7 == 0){
  document.getElementsByClassName("locator")[0].style.left = "51.5rem"


}else if(index == 6 || (index - 6) % 7 == 0){
  document.getElementsByClassName("locator")[0].style.left = "55.5rem"


}


}

const placebet = (index)=>{

  if(index == 0 || index % 7 == 0 ){
     for(let i= 35;i>=0;i -= 7){
if(state[i] == null){
  const copys = [...state];
  copys[i] = player ? "red":"green";
     player ? redarr.push(i):greenarr.push(i);
  setstate(copys);
  setplayer(!player);
          document.getElementById(i).style.background =  player ? " #fd6687" :"#ffce67"; 


  break;
}

     }
  }else if(index == 1 || (index - 1) % 7 == 0){
     
    for(let i= 36;i>=1;i -= 7){
      if(state[i] == null){
        const copys = [...state];
        copys[i] = player ? "red":"green";
           player ? redarr.push(i):greenarr.push(i);
        setstate(copys);

        setplayer(!player);
                document.getElementById(i).style.background =  player ? " #fd6687" :"#ffce67"; 

       
        
        break;
      }
      
           }
           
  }else if(index == 2 || (index - 2) % 7 == 0){
    for(let i= 37;i>=2;i -= 7){
      if(state[i] == null){
        const copys = [...state];
        copys[i] = player ? "red":"green";
           player ? redarr.push(i):greenarr.push(i);
        setstate(copys);
        setplayer(!player);
                document.getElementById(i).style.background =  player ? " #fd6687" :"#ffce67"; 

       
        break;
      }
      
           }
  }else if(index == 3 || (index - 3) % 7 == 0){
    for(let i= 38;i>=3;i -= 7){
      if(state[i] == null){
        const copys = [...state];
        copys[i] = player ? "red":"green";
           player ? redarr.push(i):greenarr.push(i);
        setstate(copys);
        setplayer(!player);
                document.getElementById(i).style.background =  player ? " #fd6687" :"#ffce67"; 

       
        break;
      }
      
           }
  }else if(index == 4 || (index - 4) % 7 == 0){
     
    for(let i= 39;i>=4;i -= 7){
      if(state[i] == null){
        const copys = [...state];
        copys[i] = player ? "red":"green";
           player ? redarr.push(i):greenarr.push(i);
        setstate(copys);
        setplayer(!player);
                document.getElementById(i).style.background =  player ? " #fd6687" :"#ffce67"; 

       
        break;
      }
      
           }
  }else if(index == 5 || (index - 5) % 7 == 0){
     
    for(let i= 40;i>=5;i -= 7){
      if(state[i] == null){
        const copys = [...state];
        copys[i] = player ? "red":"green";
           player ? redarr.push(i):greenarr.push(i);
        setstate(copys);
        setplayer(!player);
                document.getElementById(i).style.background =  player ? " #fd6687" :"#ffce67"; 

       
        break;
      }
      
           }
  }else if(index == 6 || (index - 6) % 7 == 0){
    for(let i= 41;i>=6;i -= 7){
      if(state[i] == null){
        const copys = [...state];
        copys[i] = player ? "red":"green";
           player ? redarr.push(i):greenarr.push(i);
        setstate(copys);
        setplayer(!player);
                document.getElementById(i).style.background =  player ? " #fd6687" :"#ffce67"; 

       
        break;
      }
      
           }
     }  







}
function compareNumbers(a, b) {
  return a - b;
}

const fn = ()=>{

  if(player){
   
 let a = greenarr.sort(compareNumbers);

let win =0;
for (let i =0;i<a.length;i++){
  let hwin = 1;
  let logic6 = 6;
  let logic7 = 7;
  let logic8 = 8;
for(let j = 1;j<a.length;j++){

if(a[j]-a[i] == hwin ){


hwin++;
if(hwin == 4){
  console.log("winner 1");
  Timesout("green");
  return "green"
}

}

if(a[j]-a[i] == logic6){
  console.log(a[j]-a[i])
  win++;
  logic6 += 6;
  if(logic6 == 24){
    console.log("winner logic 2");
    Timesout("green");
    return "green"
  }
}
if(a[j]-a[i] == logic7){
  console.log(a[j]-a[i])
  win++;
  logic7 += 7;
  if(logic7 == 28){
    console.log("winner logic 3");
    Timesout("green");
    return "green"
  }
}
if(a[j]-a[i] == logic8){
  console.log(a[j]-a[i])
  win++;
  logic8 += 8;
  if(logic8 == 32){
    console.log("winner logic 4");
    Timesout("green");
    return "green"
  }
}


}


}
 
    
  }else{
let win = 0;
let a = redarr.sort(compareNumbers);
    for (let i =0;i<a.length;i++){
      let hwin = 1;
      let logic6 = 6;
      let logic7 = 7;
      let logic8 = 8;
    for(let j = 1;j<a.length;j++){
    
    if(a[j]-a[i] == hwin ){
    
    
    hwin++;
    if(hwin == 4){
      console.log("winner 1");
      Timesout("red");
      return true;
    }
    
    }
    
    if(a[j]-a[i] == logic6){
      console.log(a[j]-a[i])
      win++;
      logic6 += 6;
      if(logic6 == 24){
        console.log("winner logic 2");
        Timesout("red");
        return true;
      }
    }
    if(a[j]-a[i] == logic7){
      console.log(a[j]-a[i])
      win++;
      logic7 += 7;
      if(logic7 == 28){
        console.log("winner logic 3");
        Timesout("red");
        return true;
      }
    }
    if(a[j]-a[i] == logic8){
      console.log(a[j]-a[i])
      win++;
      logic8 += 8;
      if(logic8 == 32){
        console.log("winner logic 4");
        Timesout("red");
        return true;
      }
    }
    
    
    }
    
    
    }




  }
  
  }
  const reset = ()=>{
    setstate(Array(42).fill(null));
    setplayer(true);
    settimer(30);
    setwinner(false);
    setwon("");
    redarr = [];
    greenarr = [];
    for(let i =0;i<42;i++){

      document.getElementById(i).style.background = "rgb(122 69 255)";
     
    }
 
  
  }

  const newgame = ()=>{
    setstate(Array(42).fill(null));
    setplayer(true);
    settimer(30);
    setwinner(false);
    setwon("");
    redarr = [];
    greenarr = [];
    for(let i =0;i<42;i++){

      document.getElementById(i).style.background = "rgb(122 69 255)";
     
    }
    setplayer1(0);
    setplayer2(0);
    setmennu(false);
    document.getElementsByClassName("pausemenu")[0].style.display  = "none"
  }
return(

<AppContext.Provider value={{create,handlepointer,placebet,fn,player,state,resettimer,timer,player1,player2,player,winner,won,reset,pauseMenu,resume,newgame,setGameMode,mode,showRule}}>


    {children}
</AppContext.Provider>


)


}
export{AppContext,AppProvider}