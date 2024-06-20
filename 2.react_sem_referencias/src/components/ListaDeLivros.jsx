import React from 'react';
import Livro from './Livro';

const ListaDeLivros = ({ livros }) => {
  return (
    <div className='livro'>
        {
            livros.map((livro, index) => (
            <Livro
                key={index}
                titulo={livro.titulo}
                autor={livro.autor}
                ano={livro.ano}
            />
            )
          )
        }
    </div>
  );
};

export default ListaDeLivros;