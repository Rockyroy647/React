
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Show() {

    let [data, setData] = useState([]);
    let [showfrm,setshowfrm] = useState(false)
    let [editdata,seteditdata] = useState({})

    function mydel(ID){
        axios.delete(`http://localhost:3000/userinfo/${ID}`)
        .then(()=>toast.success("delete delte successfull.."))
        .catch((err)=>toast.error("delete not delete",err))
    }

function updatedata(e){
const{name,value} = e.target
seteditdata({...editdata,[name]:value})
}
function finalsubmit(e){
    e.preventDefault()
    console.log(editdata);
    axios.put(`http://localhost:3000/userinfo/${editdata.id}`,editdata)
    .then(()=>toast.success("data update"))
    .catch(()=>toast.error("not update"))
}



    useEffect(() => {

        axios.get("http://localhost:3000/userinfo")
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

    }, []);

    return (
        <>
            <h1>This is Show Page</h1>

            <table border="1">
                <thead>
                   
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Contact</th>
                        <th>City</th>
                   
                </thead>

                <tbody>
                    {
                        data.map((e) => {
                            return (
                                <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.username}</td>
                                    <td>{e.age}</td>
                                    <td>{e.contact}</td>
                                    <td>{e.city}</td>
                                    <td><button onClick={()=>mydel(e.id)}>delete</button></td>
                                    <td><button onClick={()=>(setshowfrm(true),seteditdata(e))}> edit dataa</button></td>
                                   
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
     {
        showfrm && 
          <form onSubmit={finalsubmit}>

            <label htmlFor="">id</label>
            <input type="text"  value={editdata.id} name="id" onChange={updatedata}  /> <br /> <br />

            <label htmlFor="">name</label> 
            <input type="text"  value={editdata.username} name="username" onChange={updatedata}/><br /> <br />

            <label htmlFor="">city</label> 
            <input type="text" value={editdata.city} name="city" onChange={updatedata} /><br /> <br />

           <label htmlFor="">contact</label> 
           <input type="text" value={editdata.contact} name="contact" onChange={updatedata} /><br /> <br />


           <input type="submit" />
        </form>
     }
            


        </>
    );
}

export default Show;
