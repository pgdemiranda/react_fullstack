import React from 'react'

const Multiplicacao = (props) => {
    const resultado = props.num1 * props.num2
  return (
    <div className='operacao'>
        <h1>Multiplicação</h1>
        <p>{props.num1} * {props.num2} = {resultado}</p>
    </div>
  )
}

export default Multiplicacao