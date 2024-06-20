import React from 'react';
import './App.css';
import CelsiusParaFahrenheit from './components/CelsiusParaFahrenheit';
import FahrenheitParaCelsius from './components/FahrenheitParaCelsius';
import QuilometroParaMilhas from './components/QuilometroParaMilhas';
import MilhasParaQuilometros from './components/MilhasParaQuilometros';

const App = () => {
  return (
    <div className='container'>
      <CelsiusParaFahrenheit celsius={95}/>
      <FahrenheitParaCelsius fahrenheit={95}/>
      <QuilometroParaMilhas quilometros={95}/>
      <MilhasParaQuilometros milhas={95}/>
    </div>
  );
};

export default App;