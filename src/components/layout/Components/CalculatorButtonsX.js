import React from 'react'

function buttons(props) {
  return (
    <button className='calculator__button__x' onClick={props.onClick} data-value={props.value}>
        {props.calculatorButtonX}
    </button>
  )
}

export default buttons