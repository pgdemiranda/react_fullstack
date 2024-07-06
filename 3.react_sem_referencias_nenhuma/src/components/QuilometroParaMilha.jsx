import React from 'react'

const QuilometroParaMilha = ( {quilometro}) => {
    const milha = quilometro / 1.609344;
  return (
    <div className='conversao'>
        <h1>Conversão de Quilometros para Milhas</h1>
        <p>{quilometro}km = {milha.toFixed(2)}mi</p>
    </div>
  )
}

export default QuilometroParaMilha