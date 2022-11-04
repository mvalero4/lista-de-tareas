import React from 'react';
import '../hojas-de-estilo/TodoList.css';

function TodoList(props){
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export {TodoList};