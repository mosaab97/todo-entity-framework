/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

const TodoForm = ({ saveTodo, currentTodo }) => {
    const [name, setName] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (currentTodo) {
            setName(currentTodo.name);
            setIsComplete(currentTodo.isComplete);
        } else {
            setName('');
            setIsComplete(false);
        }
    }, [currentTodo]);

    const handleSubmit = (e) => {
        e.preventDefault();
        saveTodo({ id: currentTodo?.id, name, isComplete });
    };

    return (
        <div>
            <h2>{currentTodo ? 'Edit To-Do' : 'Add To-Do'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="To-Do name"
                    required
                />
                <label>
                    <input
                        type="checkbox"
                        checked={isComplete}
                        onChange={(e) => setIsComplete(e.target.checked)}
                    />
                    Complete
                </label>
                <button type="submit">{currentTodo ? 'Update' : 'Add'}</button>
            </form>
        </div>
    );
};

export default TodoForm;
