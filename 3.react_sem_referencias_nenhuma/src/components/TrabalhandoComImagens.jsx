import React from 'react'
import mulder from '../assets/mulder.png'
const TrabalhandoComImagens = () => {
  return (
    <div className='container'>
        <h1>Trabalhando com Imagens</h1>
        <div className='imagens'>
            <div className='imagem'>
                <h2>Imagem da pasta public</h2>
                <img src="../../public/scully.png" alt="imagem da pasta public" />
            </div>
            <div className='imagem'>
                <h2>Imagem da pasta assets</h2>
                <img src={mulder} alt="imagem da pasta assets" />
            </div>
        </div>
    </div>
  )
}

export default TrabalhandoComImagens