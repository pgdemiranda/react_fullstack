import React from 'react'

const MilhaParaQuilometro = ({ milha }) => {
        const quilometro = milha * 1.609344
    return (
    <div className='conversao'>
        <h1>Conversão de Milhas para Quilometros</h1>
        <p>{milha}mi = {quilometro.toFixed(2)}km</p>
    </div>
  )
}

export default MilhaParaQuilometro