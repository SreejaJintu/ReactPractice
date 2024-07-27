import React from 'react'
import './welcome.css'
import InputData from './InputData'

function Welcome() {
  console.log('welcome')
  return (
    <div className='welcome'>
      Welcome  :
      <InputData/>
      </div>
  )
}

export default Welcome