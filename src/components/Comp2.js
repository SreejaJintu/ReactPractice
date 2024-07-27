import React, { useState } from 'react'

function Comp2() {
 
    const [state,setState]=useState(50)
    console.log('comp2')
    const handleCounter=()=>setState(state+1)
  return (
    <div>
        comp2
        <button onClick={handleCounter}>Increment</button>
         <h2>{state}</h2>
       
    </div>
  )
}

export default Comp2