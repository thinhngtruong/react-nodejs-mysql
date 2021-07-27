import React from 'react'
import { useHistory } from 'react-router-dom';

export default function AuthInfo(props) {
  const history = useHistory();

  const btnSignOut_Clicked = function () {
    delete localStorage.todoApp_accessToken;
    delete localStorage.todoApp_userId;
    history.push('/login');
  }

  return (
    <div className="nav">
      <span>UserID: {localStorage.todoApp_userId}</span>
      <a href="javascript:;" onClick={btnSignOut_Clicked}>Sign Out</a>
    </div>
  )
}
