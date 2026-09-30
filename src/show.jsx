import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


function show (){

    let [data,setdata]=useState([])
    let [sleep,setsleep] = useState(false)
    let [edit, setedit]=useState({})

function hura( id){
axios.delete(`http://localhost:3000/userinfo/${e.id}`)
.then(()=>toast.success("wow data delte kar "))
.catch(()=>toast.error("wrong any mistak"))
}
function updatedata(evn){
   const{name,value}=evn.target
   setedit({...edit,[name]:value})

}

function donsubmit( b){
    b.preventDefault()
    console.log(edit)
    axios.put(`http://localhost:3000/userinfo/${edit.id}`,edit)
    .then(()=>toast.success("data update"))
    .catch(()=>toast.error("not update"))

}


useEffect(()=>{
    axios.get("http://localhost:3000/userinfo")
    .then((res) => {
                console.log(res.data);
                setdata(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

    }, []);


    return(
        <>
        <h1> hello baby tha is show page</h1>

    <table border="2">
        <thead>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>city</th>
            <th>contact</th>
            <th>delete</th>
            <th>edit</th>
        </tr>
        </thead>

        {
            data.map((e)=>{
                return(
                    <tr>

                    <td>{e.id}</td>
                    <td>{e.username}</td>
                    <td>{e.age}</td>
                    <td>{e.city}</td>
                    <td>{e.contact}</td>
                    <td><button onClick={()=>hura(e.id)}> delete</button></td>
                    <td><button onClick={()=>{setsleep(true),(setedit(e))}}> bhai edit</button></td>
                    </tr>
                )
            })
        }

    </table>
    {
         <form onSubmit={donsubmit}>

            

            <label htmlFor="">name</label> 
            <input type="text"  value={edit.username  || ""} name="username" onChange={updatedata}/><br /> <br />

            <label htmlFor="">city</label> 
            <input type="text" value={edit.city  || ""} name="city" onChange={updatedata} /><br /> <br />

           <label htmlFor="">contact</label> 
           <input type="text" value={edit.contact || ""} name="contact" onChange={updatedata} /><br /> <br />

           <label htmlFor=""> age</label>
           <input type="text" value={edit.age || ""}  name="age" onChange={updatedata} /> <br /> <br /> <br />
         

           <input type="submit" />
        </form>
    }

        
        
        </>
    )
}
export default show;