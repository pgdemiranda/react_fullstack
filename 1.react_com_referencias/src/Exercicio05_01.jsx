import React from 'react'
import TrabalhandoComImagensCondicionais from './components/TrabalhandoComImagensCondicionais'
import './App.css'

const App = () => {
  return (
    <div className='container'>
      <h1>Renderização de Imagens Condicionais</h1>
      <TrabalhandoComImagensCondicionais imagem="PUBLIC" />
      <TrabalhandoComImagensCondicionais imagem="ASSET" />
    </div>
  )
}

export default App