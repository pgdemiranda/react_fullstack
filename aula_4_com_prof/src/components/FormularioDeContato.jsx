import React from 'react'
import { useState } from 'react'

const FormularioDeContato = () => {

    const [ nome, setNome ] = useState("")
    const [ contato, setContato ] = useState("")
    const [ mensagem, setMensagem] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        const dadosDoForm = {
            nome : nome,
            contato : contato,
            mensagem : mensagem
        }

        const jsonParaEnviarParaOBack = JSON.stringify(dadosDoForm)

        console.log(`O seguinte JSON será enviado via HTTP POST para o back-end: ${jsonParaEnviarParaOBack}`)
    }
    
    return (
    
    <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="contato">Contato:</label>
                <input type="text" id="contato" value={contato} onChange={(e) => setContato(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="mensagem">Mensagem:</label>
                <br></br>
                <textarea id="mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)}></textarea>
            </div>
            <div>
                <button type="submit">Enviar</button>
            </div>
        </form>
    </>
  )
}

export default FormularioDeContato