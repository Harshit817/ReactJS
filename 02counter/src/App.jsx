import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]=useState(1);
  const addValue=()=>{
      setcounter(counter+1);
  }
  const subValue=()=>{
      setcounter(counter-1);
  }
  return (
    <>
      <h1>Number of time clicked on increase+decrese:{counter}</h1>
      <button onClick={addValue}>increase</button>
      <button onClick={subValue}>decrease</button>
    </>
  )
}
export default App
