import React from 'react'

function buttons(props) {
  return (
    <button className='calculator__button' onClick={props.onClick} data-value={props.value}>
        {props.calculatorButton}
    </button>
  )
}

export default buttons