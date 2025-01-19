/* eslint-disable react/prop-types */
import { Container, InputBase, styled, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '30%',
    border: '1px solid gray',
    borderRadius: '5px'
  }));

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
        <Container>
            <Typography variant="h3"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>{currentTodo ? 'Edit To-Do' : 'Add To-Do'}</Typography >
            <form onSubmit={handleSubmit}>
                <StyledInputBase
                    onChange={(e) => setName(e.target.value)}
                    placeholder="To-Do name"
                    required
                    inputProps={{ 'aria-label': 'search' }}
                    value={name}
                    type='text'
                />
                <Container>
                    <label>
                        <input
                            type="checkbox"
                            checked={isComplete}
                            onChange={(e) => setIsComplete(e.target.checked)}
                        />
                        Complete
                    </label>
                    <button type="submit">{currentTodo ? 'Update' : 'Add'}</button>
                </Container>
            </form>
        </Container>
    );
};

export default TodoForm;
