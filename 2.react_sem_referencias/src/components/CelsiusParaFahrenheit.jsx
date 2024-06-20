import React from 'react';

const CelsiusParaFahrenheit = ({ celsius }) => {
  const fahrenheit = (celsius * 9/5) + 32;
    return (
    <div className='conversao'>
        <h1>Conversão de Celsius para Fahrenheit</h1>
        <p>{celsius}°C = {fahrenheit.toFixed(2)}°F</p>
    </div>
  );
};

export default CelsiusParaFahrenheit;