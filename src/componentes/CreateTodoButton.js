import React from 'react';
import '../hojas-de-estilo/CreateTodoButton.css';

function CreateTodoButton(props) {
    // const onClickButton = () => {
    //   props.setOpenModal(true);
    // };
    
    return (
      <button
        className="CreateTodoButton"
        onClick={props.onClick}
      >
        +
      </button>
    );
}
  
export { CreateTodoButton };