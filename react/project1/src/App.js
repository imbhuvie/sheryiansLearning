import React from 'react'
import { useState } from 'react'
const App = () => {
  const [counter,setCounter] = useState(0)
  
  return (
    <>
     <div className="app">
      <button onClick={ ()=> setCounter(counter-1)}>-</button>
      <h2>{counter}</h2>
      <button onClick={ ()=> setCounter(counter+1)}>+</button>
     </div>
    </>
  )
}

export default App