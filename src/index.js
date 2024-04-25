// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './model/store';
import TodoForm from './pages/todoform';
import TodoList from './pages/todolist';
import { fetchTodos } from './api/reducer';

const fetchDataAndRenderApp = async () => {
  try {
    const todos = await fetchTodos();
    renderApp(todos);
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
};

const renderApp = (todos) => {
  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <div>
          <TodoForm />
          <TodoList todos={todos} /> 
        </div>
      </React.StrictMode>
    </Provider>,
    document.getElementById('root')
  );
};

fetchDataAndRenderApp();
