import React from 'react'
import './App.css'
import Livro from './components/Livro'
import ListaDeLivros from './components/ListaDeLivros'

const App = () => {
    const lista = [
        {
            titulo: 'Cem anos de Solidão',
            autor: 'Gabriel Garcia Marquez',
            ano: 1967
        }, {
            titulo: 'Orgulho e Preconceito',
            autor: 'Jane Austen',
            ano: 1813
        }, {
            titulo: 'Um Conto de Duas Cidades',
            autor: 'William Shakespeare',
            ano: 1609
        }, {
            titulo: 'Dom Casmurro',
            autor: 'Machado de Assis',
            ano: 1899
        }
    ]

    return (
    <div className='container'>
        <h1>Lista de Livros</h1>
        <ListaDeLivros livros={lista}/>
    </div>
  )
}

export default App