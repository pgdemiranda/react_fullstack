import React from 'react';
import './App.css';
import PrecisoEstudar from './components/PrecisoEstudar';

const App = () => {
  return (
    <div className='container'>
      <PrecisoEstudar nomeDaTecnologia={'Java e Spring Boot!'}/>
    </div>
  );
};

export default App;