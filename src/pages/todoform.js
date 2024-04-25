import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../model/todoslice';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const TodoForm = () => {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!todoText.trim()) return;

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
        title: todoText,
        completed: false
      });

      dispatch(addTodo({
        id: response.data.id,
        title: response.data.title,
        completed: response.data.completed
      }));

      setTodoText('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h3" gutterBottom>
        Todo List
      </Typography>
      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          label="Masukkan todo baru"
          variant="outlined"
          size="small"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          style={{ marginRight: '8px' }}
          sx={{ width: '400px', marginRight: '8px' }}
        />
        <Button variant="contained" color="primary" type="submit">
          Tambah
        </Button>
      </form>
    </div>
  );
};

export default TodoForm;
