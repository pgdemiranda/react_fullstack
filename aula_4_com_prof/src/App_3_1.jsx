import React from 'react'

const App = () => {
    const condicional = true;
    const estilo = condicional

    ?  {
        color : '#0000ff',
        backgroundColor : '#ffc0cb',
        width : '300px',
        padding : '15px'
    } : {
        color : '#000000',
        backgroundColor : '#ffffff',
        width : '200px',
        padding : '5px'
    }

    return (
        <div style = {estilo}>
            Outro texto com estilo inline dinâmico
        </div>
  )
}

export default App