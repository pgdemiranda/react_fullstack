import React from 'react'
import molusco from '../assets/lula_molusco_assets.jpg'

const TrabalhandoComImagensCondicionais = ({ imagem }) => {
    const renderizarImagens = () => {
        if (imagem === 'PUBLIC') {
            return <img src='../../public/lula_molusco_public.jpg' alt="" />
        } else if (imagem === 'ASSET') {
            return <img src={molusco} alt='' />
        }
    }
  return (
    <div className='imagens'>
        {renderizarImagens()}
        Trabalhando com Imagens Condicionais
    </div>
  )
}

export default TrabalhandoComImagensCondicionais