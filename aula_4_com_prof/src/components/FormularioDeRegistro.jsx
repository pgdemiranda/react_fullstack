import React, { useState } from 'react'

const FormularioDeRegistro = () => {

    const [ usuario, setUsuario] = useState("")
    const [ email, setEmail] = useState("")
    const [ senha, setSenha] = useState("")
    const [ confirmarSenha, setConfirmarSenha] = useState("")
    const [ endereco, setEndereco] = useState("")
    const [ telefone, setTelefone] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        const dadosDoForm = {
            usuario : usuario,
            email : email,
            senha : senha,
            confirmarSenha : confirmarSenha,
            endereco : endereco,
            telefone : telefone
        }

        const jsonParaEnviarParaOBack = JSON.stringify(dadosDoForm)

        if (dadosDoForm.senha === dadosDoForm.confirmarSenha) {
            console.log(`O seguinte JSON será enviado via HTTP POST para o back-end: ${jsonParaEnviarParaOBack}`)
        } else {
            console.log("A senha digita não confere com a confirmação")
        }
    }


  return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="usuario">Usuario:</label>
                <input type="text" id="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="senha">Senha:</label>
                <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="confirmarSenha">Confirmar Senha:</label>
                <input type="password" id="confirmarSenha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="endereco">Endereço:</label>
                <input type="text" id="endereco" value={endereco} onChange={(e) => setEndereco(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="telefone">Telefone:</label>
                <input type="text" id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)}/>
            </div>
            <div>
                <button type="submit">Enviar</button>
            </div>
        </form>
    </>
  )
}

export default FormularioDeRegistro