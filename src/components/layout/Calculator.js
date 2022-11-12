import React from 'react'
import CalculatorButtons from './Components/CalculatorButtons'
import CalculatorButtonsX from './Components/CalculatorButtonsX'
import ResultBox from './Components/ResultBox'

function calculator() {
  return (
    <div className='calculator__layout'>
       <table className='the__calculator'>
            <thead>
            <tr>
              <th colSpan="4">
                <ResultBox result="result"/>
              </th>
            </tr>
            </thead>
            
            <tbody>
            <tr>
              <td>
                <CalculatorButtons calculatorButton="9"/>
              </td>
              <td><CalculatorButtons calculatorButton="8"/></td>
              <td><CalculatorButtons calculatorButton="7"/></td>
              <td><CalculatorButtons calculatorButton="/"/></td>
            </tr>
            <tr>
              <td><CalculatorButtons calculatorButton="6"/></td>
              <td><CalculatorButtons calculatorButton="5"/></td>
              <td><CalculatorButtons calculatorButton="4"/></td>
              <td><CalculatorButtons calculatorButton="*"/></td>
            </tr>

            <tr>
              <td><CalculatorButtons calculatorButton="1"/></td>
              <td><CalculatorButtons calculatorButton="2"/></td>
              <td><CalculatorButtons calculatorButton="3"/></td>
              <td><CalculatorButtons calculatorButton="-"/></td>
            </tr>

            <tr>
              <td colSpan="2"><CalculatorButtonsX calculatorButtonX="0"/></td>
              <td><CalculatorButtons calculatorButton="C"/></td>
              <td><CalculatorButtons calculatorButton="+"/></td>
            </tr>
            <tr>
              <td><CalculatorButtons calculatorButton="."/></td>
              <td><CalculatorButtons calculatorButton="Del"/></td>
              <td colSpan="2">
              <CalculatorButtonsX calculatorButtonX="="/>
              </td>
            </tr>
            </tbody>
      </table>
    </div>
  )
}

export default calculator