import React from 'react'
import './App.css'
import ToDoList from './components/ToDoList'

const App = () => {

  return (
    <div className='container'>
      <h1>To-Do List</h1>
      <ToDoList />
    </div>
  )
}

export default App