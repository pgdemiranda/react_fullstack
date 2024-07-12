import React from 'react'

const App = () => {
  const estilo = {
    textColor : '#008000',
    backgroundColor : '#ffff00',
    height: '100px',
    fontWeight: 'bold'
  }
  return (
    <div style={estilo}>
      <p>Testando</p>
      <p>Testando 1, 2, 3...</p>
    </div>
  )
}

export default App