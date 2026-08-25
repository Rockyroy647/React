import{ useState } from 'react'
import Color from './assets/hooks/Color'
import Home from './assets/hooks/Home'
function App(){
  let [data,setdata]= useState(0)
  function fun(){
    setdata(+1)
  }
function tara(){
  if(data>0){
    setdata(data-1)
  }
}


  return(<>
  <Home/>
  <Color/>
  <h1>
    {data}
  </h1>
  <button onClick={fun}>add</button>
  <button onClick={tara}>sub</button>
  
  </>

  )
}
export default App;