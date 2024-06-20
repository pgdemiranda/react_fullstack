import React from 'react';

const Multiplicacao = ({ num1, num2 }) => {
  const resultado = num1 * num2;

  return (
    <div className="operacao">
      <h1>Multiplicação</h1>
      <p>{num1} * {num2} = {resultado}</p>
    </div>
  );
};

export default Multiplicacao;
