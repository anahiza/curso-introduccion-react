
import React from 'react'
import './App.css';
import { AppUI } from './AppUI';

const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Curso platzi", completed: false },
  { text: "Leer libro", completed: false },
  { text: "tabajar", completed: true },
  { text: 'Llorar con la llorona', completed: true },
]

function App(props) {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('')
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  let searchedTodos = []
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  }
  else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      console.log(searchText)
      return todoText.includes(searchText)

    })
  }


  const completeTodo=(text)=>{
    const todoIndex = todos.findIndex(todo=> todo.text===text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed=true
    setTodos(newTodos)

  }

  const deleteTodo=(text)=>{
    const todoIndex = todos.findIndex(todo=> todo.text===text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)

  }

  return (
    <AppUI
    totalTodos={totalTodos} 
    completedTodos={completedTodos} 
    searchValue={searchValue} 
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo = {completeTodo}
    deleteTodo = {deleteTodo}
    /> 
  );
}

export default App;
