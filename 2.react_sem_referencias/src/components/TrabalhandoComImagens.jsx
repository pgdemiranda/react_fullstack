import React from 'react'
import molusco from '../assets/lula_molusco_assets.jpg'

const TrabalhandoComImagens = () => {
  return (
    <div className='container'>
        <h1>Trabalhando com Imagens</h1>
        <div className='imagens'>
            <div className='imagem'>
                <h2>Imagem da pasta public</h2>
                <img src="../../public/lula_molusco_public.jpg" alt="imagem da pasta public" />
            </div>
            <div className='imagem'>
                <h2>Imagem da pasta assets</h2>
                <img src={molusco} alt="imagem da pasta assets" />
            </div>
        </div>
    </div>
  )
}

export default TrabalhandoComImagens