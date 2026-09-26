import { useState } from "react";

function Color(){
    
        let[color,setdata]= useState ("black")
         function red(){
            setdata("red")
        }
function yellow(){
    setdata('yellow')
}
function orange(){
    setdata('orange')
}
function tara(){
    setdata('blue')
}


    return(
        <>
        <div style={{backgroundColor:color, height:"50vh" }}>
        <h1>Lorem ipsum dolor sit amet consectetur elit.</h1>

      <button onClick={red}>red</button>
      <button onClick={yellow}>yellow</button>
      <button onClick={orange} >blue</button>
       <button onClick={tara}>green</button>
</div> 
        </>

        
    )
    
}
export default Color;