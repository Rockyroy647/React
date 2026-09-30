import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Home(){
let [shiv,setshiv] = useState([])

function mycall(id){
    axios.delete(`http://localhost:4000/userinfo/${id}`)
    .then(()=>toast.success("hello  default data"))
    .catch((err)=>toast.error("this not  deffault...",err))
}
useEffect(()=>{
    axios.get("http://localhost:4000/userinfo")
    .then((bhai)=>{console.log(bhai.data)
        setshiv(bhai.data)
    })
    .catch((err)=>{console.log(err)})
},[])


    return(
        <>
        <h1>this is home page data dikhna hai </h1>
        <table>
            <tr>
            <th>name</th>
            <th>id</th>
            <th>city</th>
            <th>age</th>
            <button>delete</button>
            </tr>


            {
                shiv.map((bio)=>{
                    return(
                        <tr key={bio.id}>
                                    <td>{bio.id}</td>
                                    <td>{bio.username}</td>
                                    <td>{bio.age}</td>
                                    <td>{bio.contact}</td>
                                    <td>{bio.city}</td>
                                    <td><button onClick={()=>mycall(bio.id)}>delete</button></td>
                                </tr>
                    )
                })
            }
        </table>
        </>
    )
}
export default Home;