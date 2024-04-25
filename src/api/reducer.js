import axios from 'axios';
import { fetchTodosSuccess } from '../model/todoslice';

export const fetchTodos = (page) => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {
          _page: page,
          _limit: 10
        }
      });

      const todos = response.data;
      dispatch(fetchTodosSuccess(todos));
    } catch (error) {
      console.error('Error fetching todos:', error);
      throw error;
    }
  };
};
