import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Page(){
 
    let [mydata, setmydata] = useState({})
let radha= useNavigate()

function bhabhi(roy){
const{name,value} = roy.target
 setmydata({
    ...mydata,[name]:value
 })
}
 function submit(eve){
eve.preventDefault()
console.log(mydata)
axios.post('http://localhost:4000/userinfo',mydata)
.then((eve)=>{toast.warning("this full data collection") 
radha("/Home")

})
.catch((eve)=>{toast.error("wrong intery")
})
 }




    return(
        <>
        <h1>hello this is insert page</h1>
   <div className=" capital font-bold  text-center">
   <form  onSubmit={submit}>
    <label htmlFor="">Name</label>
  <input type="text" name="username" onChange={bhabhi}  className="border"/> <br /> <br />
  <label htmlFor="">Age</label>
  <input type="text" name="age" onChange={bhabhi} className="border" /> <br /> <br />
  <label htmlFor="">City</label>
  <input type="text" name="city" onChange={bhabhi} className="border"/> <br /> <br /> 
  <label htmlFor="">Contact</label>
  <input type="text" name="contact" onChange={bhabhi} className="border" />  <br /> <br /> 
<input type="submit"  />

   </form>
</div>




        </>
    )
}
export default Page;