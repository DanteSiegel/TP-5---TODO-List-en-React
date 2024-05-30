import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            addTodo(task);
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Escribi lo que tenes que hacer"
            />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default TodoInput;
