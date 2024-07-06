import React from 'react'
import './App.css'
import PrecisoEstudar from './components/PrecisoEstudar';
const App = () => {
  return (
    <div className='container'>
      <PrecisoEstudar tec1={'Java'} tec2={'Spring Boot'} tec3={'React'} />
    </div>
  );
};

export default App