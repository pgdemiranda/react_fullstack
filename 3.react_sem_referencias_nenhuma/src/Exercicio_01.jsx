import React from 'react'
import './App.css'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'
const App = () => {
  return (
    <div className="container">
      <h1>Operações Aritméticas Básicas</h1>
      <Adicao num1={10} num2={20} />
      <Subtracao num1={40} num2={20} />
      <Multiplicacao num1={80} num2={20} />
      <Divisao num1={100} num2={20} />
    </div>
  )
}

export default App
