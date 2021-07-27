import React, { useEffect, useReducer } from 'react'

import AddTask from '../components/AddTask'
import AuthInfo from '../components/AuthInfo';
import SearchBar from '../components/SearchBar';
import TodoList from '../components/TodoList'

import AppContext from '../todoAppContext';
import reducer from '../todoAppReducer';

import { axiosInstance } from '../utils';

function Todo() {

  const initialAppState = {
    query: '',
    items: []
  }

  const [store, dispatch] = useReducer(reducer, initialAppState);

  useEffect(function () {
    async function loadTasks() {
      const userId = 1;
      const res = await axiosInstance.get(`/tasks/${userId}`);
      dispatch({
        type: 'init',
        payload: {
          items: res.data,
          query: ''
        }
      });
    }
    loadTasks();
  }, []);

  return (
    <div className="container">
      <AuthInfo />
      <AppContext.Provider value={{ store, dispatch }}>
        <SearchBar initQuery="" />
        <TodoList />
        <AddTask initValue="New Item Title" />
      </AppContext.Provider>
    </div>
  );
}

export default Todo;
