import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, showFastest }) => {
    return (
        <div>
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem key={index} todo={todo} toggleTodo={() => toggleTodo(index)} />
                ))}
            </ul>
            <button onClick={showFastest}>Mostrar Tarea Más Rápida</button>
        </div>
    );
};

export default TodoList;
