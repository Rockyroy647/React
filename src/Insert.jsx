import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios"

function Insert(){
   
let [baba,setbaba]= useState({})

let  shyam = useNavigate()

    function bhai(pay){
const{name,value}=pay.target
setbaba({...baba,[name]:value})
    }
   
    function submit(e){
        e.preventDefault()
        console.log(baba)

   
axios.post("http://localhost:3000/userinfo",baba)
.then((e)=>{toast.success("good ")
shyam("/show")
})
.catch((error)=>{console.log("beta glti kar reha hai kahi to tum")})



    }
   
    return(
        <>
        <form onSubmit={submit} >
            <label htmlFor="">id</label>
            <input type="text" name="id" onChange={bhai} /> <br /> <br />
            <label htmlFor="">Name</label>
            <input type="text" name="username" onChange={bhai} /> <br /> <br />
            <label htmlFor="">age</label>
            <input type="text"  name="age" onChange={bhai}/> <br /> <br />
            <label htmlFor="">city</label>
            <input type="text"  name="city" onChange={bhai}/> <br /> <br />
            <label htmlFor="">contact</label>
            <input type="text"  name="contact" onChange={bhai}/> <br /> <br />
           <input type="submit" />

        </form>



        </>
    )
}
export default Insert;