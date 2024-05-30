import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (task) => {
        const newTodo = {
            texto: task,
            fechaCreacion: new Date(),
            completado: false,
            fechaTachado: null,
        };
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    };

    const toggleTodo = (index) => {
        const newTodos = todos.map((todo, i) => {
            if (i === index) {
                return {
                    ...todo,
                    completado: !todo.completado,
                    fechaTachado: !todo.completado ? new Date() : null,
                };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const showFastest = () => {
        const completedTodos = todos.filter((todo) => todo.completado && todo.fechaTachado !== null);
        if (completedTodos.length > 0) {
            const fastest = completedTodos.reduce((prev, curr) => {
                const prevDuration = prev.fechaTachado - prev.fechaCreacion;
                const currDuration = curr.fechaTachado - curr.fechaCreacion;
                return prevDuration < currDuration ? prev : curr;
            });
            alert(`La tarea más rápida en realizarse fue: ${fastest.texto} - Tiempo: ${(fastest.fechaTachado - fastest.fechaCreacion) / 1000} segundos`);
        } else {
            alert('No hay tareas completadas para mostrar.');
        }
    };

    return (
        <div className="App">
            <h1>Lista de Tareas</h1>
            <TodoInput addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} showFastest={showFastest} />
        </div>
    );
};

export default App;
