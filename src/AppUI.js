import React from 'react';
import { TodoContext } from './componentes/TodoContext';
import { TodoCounter } from './componentes/TodoCounter';
import { TodoSearch } from './componentes/TodoSearch';
import { TodoList } from './componentes/TodoList';
import { TodoItem } from './componentes/TodoItem';
import { TodoForm } from './componentes/TodoForm';
import { CreateTodoButton } from './componentes/CreateTodoButton';
import { Modal } from './componentes/Modal';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primera Tarea!</p>}
        
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };