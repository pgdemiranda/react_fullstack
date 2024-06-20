import React from 'react';

const MilhasParaQuilometros = ({ milhas }) => {
  const quilometros = milhas * 1.609344;
    return (
    <div className='conversao'>
        <h1>Conversão de Milhas para Quilometros</h1>
        <p>{milhas}mi = {quilometros.toFixed(2)}km</p>
    </div>
  );
};

export default MilhasParaQuilometros;