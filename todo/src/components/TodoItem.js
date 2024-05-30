import React from 'react';

const TodoItem = ({ todo, toggleTodo }) => {
    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completado}
                onChange={toggleTodo}
            />
            <label style={{ textDecoration: todo.completado ? 'line-through' : 'none' }}>
                {todo.texto} - Creado: {new Date(todo.fechaCreacion).toLocaleString()}
                {todo.fechaTachado && ` - Tachado: ${new Date(todo.fechaTachado).toLocaleString()}`}
            </label>
        </li>
    );
};

export default TodoItem;
