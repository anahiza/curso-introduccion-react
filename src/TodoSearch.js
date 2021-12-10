import React from 'react';
import "./TodoSearch.css"

function TodoSearch() {
  const [saerchValue, setSearchValue]=React.useState('')

  const onSearchValueChange=(event)=>{
    setSearchValue(event.target.value)
  }
  
  return [
      <input 
      placeholder="Cebolla" 
      className="TodoSearch" 
      onChange={onSearchValueChange} 
      value={saerchValue}/>,
      <p>{saerchValue}</p>
      

  ];
  
}

export { TodoSearch };