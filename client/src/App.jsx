import { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import server from './server/server';
import Header from './components/Header';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [currentTodo, setCurrentTodo] = useState(null);

    // Fetch all todos
    const fetchTodos = async () => {
        const response = await server.todo.list();
        setTodos(response);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    // Add or update a to-do
    const saveTodo = async (todo) => {
        if (todo.id) {
            await server.todo.update(todo);
        } else {
            await server.todo.add(todo);
        }
        fetchTodos();
        setCurrentTodo(null);
    };

    // Delete a to-do
    const deleteTodo = async (id) => {
        await server.todo.delete(id);
        fetchTodos();
    };

    return (
        <div>
            <Header />
            <div style={{textAlign: 'center', margin: 20, padding: 20}}>
                <TodoForm saveTodo={saveTodo} currentTodo={currentTodo} />
                <TodoList todos={todos} deleteTodo={deleteTodo} setCurrentTodo={setCurrentTodo} />
            </div>
        </div>
    );
};

export default App;
