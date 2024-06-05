import React, { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'View users', done: false },
        { id: 2, text: 'Build a Todo List App', done: false },
        { id: 3, text: 'Find a friend to chat with', done: false }
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleAddTodo = () => {
        if (inputValue.trim() === '') return;

        setTodos([...todos, { id: Date.now(), text: inputValue }]);
        setInputValue('');
    };

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const switcherToDo = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, done: !todo.done }
            }
            return todo;
        }))
    };



    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="Add a new todo"
            />
            <button onClick={handleAddTodo}>Add</button>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.done}
                            onChange={() => switcherToDo(todo.id)}
                        />
                        <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                            {todo.text}
                        </span>
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>

                ))}
            </ul>
        </div>
    );
};

export default TodoList;