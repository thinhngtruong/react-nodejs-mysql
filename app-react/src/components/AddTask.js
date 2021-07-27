import React, { useState, useContext } from 'react'
import todoAppContext from '../todoAppContext';
import { axiosInstance } from '../utils';

export default function AddTask({ initValue }) {
  const { dispatch } = useContext(todoAppContext);
  const [item, setItem] = useState(initValue);

  const txtItemTitle_Changed = function (e) {
    setItem(e.target.value);
  }

  const btnAdd_Clicked = async function () {
    const newItem = {
      id: Math.floor(Math.random() * 100) + 10,
      title: item,
      complete: false
    };

    const user_id = 1;
    const res = await axiosInstance.post('/tasks', {
      title: item,
      user_id
    });

    if (res.status === 201) {
      dispatch({
        type: 'add_item',
        payload: newItem
      });
      setItem(initValue);
    }
  }

  const txtItemTitle_KeyUp = function (e) {
    if (e.keyCode === 13) {
      btnAdd_Clicked();
    }
  }

  return (
    <div>
      <h3>Add Task</h3>
      <div className="fg">
        <input type="text" value={item} onChange={txtItemTitle_Changed} onKeyUp={txtItemTitle_KeyUp} />
        <button onClick={btnAdd_Clicked}>Add</button>
      </div>
    </div>
  )
}
