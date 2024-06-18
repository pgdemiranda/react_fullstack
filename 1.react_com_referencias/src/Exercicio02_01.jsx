import React from 'react'
import './App.css'
import CelsiusParaFahrenheit from './components/CelsiusParaFahrenheit'
import FahrenheitParaCelsius from './components/FahrenheitParaCelsius'
import QuilometroParaMilhas from './components/QuilometroParaMilhas'
import MilhasParaQuilometros from './components/MilhasParaQuilometros'

const App = () => {
  return (
    <div className='container'>
      <CelsiusParaFahrenheit celsius={100}/>
      <FahrenheitParaCelsius fahrenheit={100}/>
      <QuilometroParaMilhas quilometros={100}/>
      <MilhasParaQuilometros milhas={100}/>
    </div>
  )
}

export default App