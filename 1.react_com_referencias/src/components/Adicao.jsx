import React from 'react'

const Adicao = (props) => {
    const resultado = props.num1 + props.num2
  return (
    <div className='operacao'>
        <h1>Adição</h1>
        <p>{props.num1} + {props.num2} = {resultado}</p>
    </div>
  )
}

export default Adicao