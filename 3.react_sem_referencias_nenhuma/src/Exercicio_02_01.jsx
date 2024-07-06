import React from 'react';
import './App.css';
import CelsiusParaFahrenheit from './components/CelsiusParaFahrenheit';
import FahrenheitParaCelsius from './components/FahrenheitParaCelsius';
import QuilometroParaMilha from './components/QuilometroParaMilha';
import MilhaParaQuilometro from './components/MilhaParaQuilometro';

const App = () => {
  return (
    <div className='container'>
      <CelsiusParaFahrenheit celsius={100}/>
      <FahrenheitParaCelsius fahrenheit={200}/>
      <QuilometroParaMilha quilometro={300}/>
      <MilhaParaQuilometro milha={400}/>
    </div>
  );
};

export default App;
