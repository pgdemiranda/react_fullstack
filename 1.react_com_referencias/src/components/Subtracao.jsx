import React from 'react'

const Subtracao = (props) => {
    const resultado = props.num1 - props.num2
  return (
    <div className='operacao'>
        <h1>Subtração</h1>
        <p>{props.num1} - {props.num2} = {resultado}</p>
    </div>
  )
}

export default Subtracao