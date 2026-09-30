<<<<<<< HEAD

import { Routes, Route } from "react-router-dom";
import Insert from "./insert";

import Show from "./show";

function App() {

    return (
        <>
            <Routes>

                <Route index element={<Insert/>}/>
                <Route path="show" element={<Show/>}/>


                

            </Routes>
        </>
    );
}

export default App;
=======
import { Routes,Route } from "react-router-dom";
import Insert from "./component/insert"
import Show from "./component/show"
function App(){
  return(
    <>
    <Routes>
     
     <Route index element ={<Insert/>}/>
      
    <Route path="Show" element={<Show/>}/>
    </Routes>
    </>
  )
 }
 export default App;
>>>>>>> b35adefc21cf5e1eacb3cea5191aeef77e137c03
