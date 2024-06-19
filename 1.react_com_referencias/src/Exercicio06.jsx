import React from 'react'
import './App.css'
import HookContador from './components/HookContador'

const App = () => {
  return (
    <div className='container'>
        <h1>Contador</h1>
        <HookContador />
    </div>
  )
}

export default App