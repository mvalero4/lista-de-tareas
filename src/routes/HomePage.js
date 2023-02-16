import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTodos } from './useTodos';
import { TodoCounter } from '../componentes/TodoCounter';
import { TodoSearch } from '../componentes/TodoSearch';
import { TodoList } from '../componentes/TodoList';
import { TodoItem } from '../componentes/TodoItem';
import { CreateTodoButton } from '../componentes/CreateTodoButton';
// import { TodoForm } from './componentes/TodoForm';
// import { Modal } from './componentes/Modal';

function HomePage() {
  const navigate = useNavigate();
  const { state, stateUpdaters } = useTodos();

  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    searchValue,
    //openModal,
    //setOpenModal,
  } = state;

  const {
    // setOpenModal,
    // addTodo,
    completeTodo,
    deleteTodo,
    setSearchValue,
  } = stateUpdaters;

  return (
    <React.Fragment>
      <TodoCounter
        totalTodos={totalTodos}
        completedTodos={completedTodos}
      />
      
      <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
      />

      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primera Tarea!</p>}
        
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onEdit={() => 
              navigate(
                '/edit/' + todo.id,
                {
                  state: { todo }
                },
              )
            }
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </TodoList>

      {/* {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )} */}
      
      <CreateTodoButton
        onClick={() => navigate('/New')}
        //setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { HomePage };