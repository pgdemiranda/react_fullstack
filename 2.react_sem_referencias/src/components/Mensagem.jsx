import React from 'react'

const Mensagem = ({ tipo }) => {
    const renderizarMensagem = () => {
    if (tipo === 'sucesso') {
        return <div className='mensagem'>
            <h1>Sucesso!</h1>
        </div>
    } else if (tipo === 'erro') {
        return <div className='mensagem'>
            <h1>Erro!</h1>
        </div>
    } else if (tipo === 'aviso') {
        return <div className='mensagem'>
            <h3>Atenção!</h3>
        </div>
    } else {
        return null
    }
}

  return (
    <div className='mensagem'>
        {renderizarMensagem()}
    </div>
  )
}

export default Mensagem