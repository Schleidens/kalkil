import React from 'react'
import Calculator from './layout/Calculator'

function Homepage() {
  return (
    <div className='main'>
       <div className='calculator'>
            <Calculator />
        </div>
       <div className='pose'>
            pose
       </div>
    </div>
  )
}

export default Homepage