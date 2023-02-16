import React from 'react';
import '../hojas-de-estilo/TodoCounter.css';

function TodoCounter({totalTodos,completedTodos,loading}) {  
  return (
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} Tareas</h2>
  );
}

export { TodoCounter };