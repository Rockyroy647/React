
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