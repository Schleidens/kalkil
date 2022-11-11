import React from 'react'

function buttons(props) {
  return (
    <button className='calculator__button'>
        {props.calculatorButton}
    </button>
  )
}

export default buttons