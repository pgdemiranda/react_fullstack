import React from 'react'
import mulder from '../assets/mulder.png'

const TrabalhandoComImagensCondicionais = ({ imagem }) => {
    const renderizarImagens = () => {
        if (imagem === 'PUBLIC') {
            return <img src='../../public/scully.png' alt="" />
        } else if (imagem === 'ASSET') {
            return <img src={mulder} alt='' />
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