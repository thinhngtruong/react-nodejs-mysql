import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Login from './views/Login';
import Todo from './views/Todo';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        {/* <Route path="/login" render={() => <Login />} /> */}

        <PrivateRoute path="/">
          <Todo />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

function PrivateRoute({ children, ...rest }) {
  const renderChildren = function ({ location }) {
    return localStorage.todoApp_accessToken ? children : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: location }
        }}
      />
    );
  }

  return (
    <Route {...rest} render={renderChildren} />
  );
}

export default App;
