import React from 'react';
import { TodoContext } from '../TodoContext';
import "./TodoSearch.css"

function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext)
  
  const onSearchValueChange=(event)=>{    
    setSearchValue(event.target.value)
  }
  
  return [
      <input 
      placeholder="Escribe tu TODO" 
      className="TodoSearch" 
      onChange={onSearchValueChange} 
      value={searchValue}/>   
      

  ];
  
}

export { TodoSearch };