import React from 'react';
import "./TodoSearch.css"

function TodoSearch({searchValue, setSearchValue}) {
  
  const onSearchValueChange=(event)=>{    
    setSearchValue(event.target.value)
  }
  
  return [
      <input 
      placeholder="Cebolla" 
      className="TodoSearch" 
      onChange={onSearchValueChange} 
      value={searchValue}/>   
      

  ];
  
}

export { TodoSearch };