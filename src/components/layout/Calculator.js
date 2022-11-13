import React, { useState } from 'react'
import CalculatorButtons from './Components/CalculatorButtons'
import CalculatorButtonsX from './Components/CalculatorButtonsX'
import ResultBox from './Components/ResultBox'

function Calculator() {
  const [result, setResult] = useState("");


  //button interact method to match any button 

  const handleClick = e => {
    const value = e.target.getAttribute('data-value');
        if(result === 'ERROR' || result === 'undefined'){
          setResult((value))
        }else{
          switch(value) {
            case 'clear':
                setResult((''))
                break;
            case 'equal':
                calculate();
                break;
            case 'slice':
                setResult((result.slice(result.length-1)))
                break;    
            default:
                setResult((result+value))
        }
        }

  }

  
//calculate function set result to the exact calcule
  const calculate = () =>{
    try {
      // eslint-disable-next-line no-eval
      const finalResult = eval(result);
      setResult((finalResult))
  } catch (e) {
     setResult(('ERROR'))
  }
  }


  return (
    <div className='calculator__layout'>
       <table className='the__calculator'>
            <thead>
            <tr>
              <th colSpan="4">
                <ResultBox result={result || setResult}/>
              </th>
            </tr>
            </thead>
            
            <tbody>
            <tr>
              <td>
                <CalculatorButtons calculatorButton="9" onClick={handleClick} value="9"/>
              </td>
              <td><CalculatorButtons calculatorButton="8" onClick={handleClick} value="8"/></td>
              <td><CalculatorButtons calculatorButton="7" onClick={handleClick} value="7"/></td>
              <td><CalculatorButtons calculatorButton="/" onClick={handleClick} value="/"/></td>
            </tr>
            <tr>
              <td><CalculatorButtons calculatorButton="6" onClick={handleClick} value="6"/></td>
              <td><CalculatorButtons calculatorButton="5" onClick={handleClick} value="5"/></td>
              <td><CalculatorButtons calculatorButton="4" onClick={handleClick} value="4"/></td>
              <td><CalculatorButtons calculatorButton="*" onClick={handleClick} value="*"/></td>
            </tr>

            <tr>
              <td><CalculatorButtons calculatorButton="1" onClick={handleClick} value="1"/></td>
              <td><CalculatorButtons calculatorButton="2" onClick={handleClick} value="2"/></td>
              <td><CalculatorButtons calculatorButton="3" onClick={handleClick} value="3"/></td>
              <td><CalculatorButtons calculatorButton="-" onClick={handleClick} value="-"/></td>
            </tr>

            <tr>
              <td colSpan="3"><CalculatorButtonsX calculatorButtonX="0" onClick={handleClick} value="0"/></td>
              <td><CalculatorButtons calculatorButton="+" onClick={handleClick} value="+"/></td>
            </tr>
            <tr>
              <td><CalculatorButtons calculatorButton="." onClick={handleClick} value="."/></td>
              <td><CalculatorButtons calculatorButton="AC" onClick={handleClick} value="clear"/></td>
              <td colSpan="2">
              <CalculatorButtonsX calculatorButtonX="=" onClick={handleClick} value="equal"/>
              </td>
            </tr>
            </tbody>
      </table>
    </div>
  )
}

export default Calculator