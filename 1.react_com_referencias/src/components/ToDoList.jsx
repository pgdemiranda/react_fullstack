import React, { useState } from 'react'

const ToDoList = () => {
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState('')
    const adicionarTarefa = () => {
        if (novaTarefa.trim !== '') {
            setTarefas ([...tarefas, novaTarefa]);
            setNovaTarefa ('')
        }
    }
    return (
        <div className='container'>
            <h2>Lista de Tarefas</h2>
            <input type="text" value={novaTarefa} onChange={(e) => setNovaTarefa(e.target.value)} placeholder='Digite uma Nova Tarefa'/>
            <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
            <ul>
                {tarefas.map((tarefa, index) => <li key={index}>{tarefa}</li>)}
            </ul>
        </div>
    )
}
export default ToDoList