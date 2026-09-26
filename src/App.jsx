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