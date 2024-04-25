import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../api/reducer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

const TodoList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos(page));
  }, [dispatch, page]);

  console.log('cekstore', todos);
  
  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <List>
        {todos.map((todo, index) => (
          <ListItem key={todo.id}>
            <ListItemText primary={`${index + 1}. ${todo.title}`} />
          </ListItem>
        ))}
      </List>
      <div style={{ marginTop: '20px' }}>
        <Button sx={{ width: '10rem', marginRight: '1rem' }} variant="contained" disabled={page === 1} onClick={handlePrevPage}>
          Previous
        </Button>
        <Button sx={{ width: '10rem' }} variant="contained" onClick={handleNextPage}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default TodoList;
