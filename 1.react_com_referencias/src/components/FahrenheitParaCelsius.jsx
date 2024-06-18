import React from 'react'

const FahrenheitParaCelsius = ({ fahrenheit }) => {
  const celsius = (fahrenheit - 32) * 5/9;
    return (
    <div className='conversao'>
        <h1>Conversão de Fahrenheit para Celsius</h1>
        <p>{fahrenheit}°F = {celsius.toFixed(2)}°C</p>
    </div>
  )
}

export default FahrenheitParaCelsius