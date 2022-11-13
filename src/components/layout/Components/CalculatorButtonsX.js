import React from 'react'

function CalculatorButtonsX(props) {
  return (
    <button className='calculator__button__x' onClick={props.onClick} data-value={props.value}>
        {props.calculatorButtonX}
    </button>
  )
}

export default CalculatorButtonsX