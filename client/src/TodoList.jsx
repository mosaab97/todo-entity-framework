/* eslint-disable react/prop-types */

const TodoList = ({ todos, deleteTodo, setCurrentTodo }) => {
    console.log(todos)
    return (
        <div>
            <h2>To-Do List</h2>
            <ul>
                {todos && todos.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.name} - {todo.isComplete ? 'Complete' : 'Incomplete'}</span>
                        <button onClick={() => setCurrentTodo(todo)}>Edit</button>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
