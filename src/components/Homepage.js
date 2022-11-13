import React from 'react'
import Calculator from './layout/Calculator'
import Pose from './layout/Components/Pose'

function Homepage() {
  return (
    <div className='main'>
       <div className='calculator'>
            <Calculator />
        </div>
       <div className='pose'>
            <div className="pose__box">

              {/* the title */}
              <h1 className='pose__title'>
                KALKIL
              </h1>

              {/* the subtitle */}
              <p className='pose__subtitle'>
                A web based calculator app create by <a href="https://github.com/Schleidens" target="_blank" rel="noreferrer">Schleidens.Dev</a>
                ,
                <br /> 
                (this app will not have any future maintain as it was a learning project) :)
              </p>

                {/* pose components */}
              <Pose />
            </div>
       </div>
    </div>
  )
}

export default Homepage