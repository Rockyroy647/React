import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Insert() {

    let [frmdata, setfrmdata] = useState({});

    let shyam = useNavigate();

    function hinput(e) {
        const { name, value } = e.target

        setfrmdata({
            ...frmdata,
            [name]: value
        });
    }

    function submit(e) {
        e.preventDefault()

        console.log(frmdata)

        axios.post("http://localhost:3000/userinfo", frmdata)
            .then((e) => {
                toast.success("Inserted successfully....")
            shyam("/show")
            })
            .catch((er) => {
                console.log("Not inserted", er);
            })
    }

    return (
        <>
            <h1>This is insert page</h1>

            <form onSubmit={submit}>

                <label>Name </label>
                <input
                    type="text"
                    name="username"
                    onChange={hinput}
                />
                <br /><br />

                <label>Age </label>
                <input
                    type="text"
                    name="age"
                    onChange={hinput}
                />
                <br /><br />

                <label>Contact </label>
                <input
                    type="text"
                    name="contact"
                    onChange={hinput}
                />
                <br /><br />

                <label>City </label>
                <input
                    type="text"
                    name="city"
                    onChange={hinput}
                />
                <br /><br />

                <input type="submit" />

            </form>
        </>
    );
}

export default Insert;