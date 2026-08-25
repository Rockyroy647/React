import { useState } from "react"
import hero from "./hooks/hero.png"

function Home(){
    let [photo,setphoto]= useState ('black');
    function fun(){
        setphoto('hero.png')
    }


    return(
        <>
        <div style={{}}>
            <h1>Lorem, ipsum.</h1>
            <button onClick={fun}>green</button>



        </div>
        
        
        </>
    )
}
export default Home;