import Comp2 from './Comp2'
import React, { useState } from 'react'


function InputData() {
  <>
     const [show,setShow]=useState(true)
  const handleShow=()=>{setShow(true)}
  const handleHide=()=>{setShow(false)}

    console.log('input')
  return (
  
        
        <button onClick={handleShow}>show</button>
        <button onClick={handleHide}>hide</button>
        {show ? <Comp2/> :'nothing'} 
           </>
  )
}

export default InputData