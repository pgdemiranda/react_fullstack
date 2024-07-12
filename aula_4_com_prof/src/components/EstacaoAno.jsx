import React from 'react'
import styles from './EstacaoAno.module.css'

const EstacaoAno = ({ estacao }) => {
    
    const defineMensagem = (estacao) => {
        if (estacao === 'verao') {
            return "Tempo de praia e sol!"
    } else if (estacao === 'outono') {
            return "Folhas caindo, outono chegando!"
    } else if (estacao === 'inverno') {
            return "Época de frio e aconchego!"
    } else if (estacao === 'primavera') {
            return "Flores e cores, é primavera!"
    }
    }
  
    const defineCor = (estacao) => {
        if (estacao === 'verao') {
            return styles.verao
        } else if (estacao === 'outono') {
            return styles.outono
        } else if (estacao === 'inverno') {
            return styles.inverno
        } else if (estacao === 'primavera') {
            return styles.primavera
        }
    }

    return (
    <div className={defineCor(estacao)}>
        <p>{defineMensagem(estacao)}</p>
    </div>
  )
}

export default EstacaoAno