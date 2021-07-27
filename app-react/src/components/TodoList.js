import React, { useContext } from 'react'
import ToDoItem from './TodoItem';
import todoAppContext from '../todoAppContext';

export default function TodoList(props) {

  const { store } = useContext(todoAppContext);

  return (
    <div>
      <h3>Todo List</h3>
      <ul>
        {
          store.items.filter(item => item.title.toLowerCase().includes(store.query.toLowerCase()))
            .map(item => <ToDoItem key={item.id} item={item} />)
        }
      </ul>
    </div>
  )
}
