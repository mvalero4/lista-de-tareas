import React from 'react';
import '../hojas-de-estilo/TodoSearch.css';

function TodoSearch({searchValue, setSearchValue, loading}) {  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Busca tu tarea"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };