
import React from 'react'
import './App.css';
import {TodoCounter} from './TodoCounter'
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const todos=[
  {text:"Cortar cebolla", completed:false},
  {text:"Curso platzi", completed:false},
  {text:"Cortar cebolla", completed:false},
]

function App(props) {
  return (
    <React.Fragment>
    <TodoCounter />
    <TodoSearch />

    <TodoList>
      {todos.map(todo => (
        <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
        />
      ))}
    </TodoList>
    <CreateTodoButton />
  </React.Fragment>
  );     
}

export default App;
