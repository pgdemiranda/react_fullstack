import React from 'react'

const QuilometroParaMilhas = ({ quilometros }) => {
  const milhas = quilometros / 1.609344
    return (
    <div className='conversao'>
        <h1>Conversão de Quilometros para Milhas</h1>
        <p>{quilometros}km = {milhas.toFixed(2)}</p>
    </div>
  )
}

export default QuilometroParaMilhas