import React from 'react'

function CalculatorButtons(props) {
  return (
    <button className='calculator__button' onClick={props.onClick} data-value={props.value}>
        {props.calculatorButton}
    </button>
  )
}

export default CalculatorButtons