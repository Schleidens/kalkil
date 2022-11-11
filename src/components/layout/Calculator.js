import React from 'react'

function calculator() {
  return (
    <div className='calculator__layout'>
       <table className='the__calculator'>
            <tr>
              <th colSpan="4">result</th>
            </tr>
            <tr>
              <td>9</td>
              <td>8</td>
              <td>7</td>
              <td>/</td>
            </tr>
            <tr>
              <td>6</td>
              <td>5</td>
              <td>4</td>
              <td>*</td>
            </tr>

            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>-</td>
            </tr>

            <tr>
              <td colSpan="2">0</td>
              <td>.</td>
              <td>+</td>
            </tr>
            <tr>
              <td colSpan="4">=</td>
            </tr>
      </table>
    </div>
  )
}

export default calculator