import React, { useContext } from 'react'
import todoAppContext from '../todoAppContext';
import { axiosInstance } from '../utils';

export default function ToDoItem({ item }) {

  const { dispatch } = useContext(todoAppContext);

  const btnDeleteItem_Clicked = async function () {
    const res = await axiosInstance.patch(`/tasks/${item.id}`);
    if (res.status === 200) {
      dispatch({
        type: 'finish_task',
        payload: {
          id: item.id
        }
      });
    }
  }

  return (
    <li className={item.complete ? 'done' : ''}>
      {item.title}
      {!item.complete && <button onClick={btnDeleteItem_Clicked}>Delete</button>}
    </li>
  )
}
