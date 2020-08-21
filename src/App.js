import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from './container/login/login'
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './container/Admin/admin'
import Deshbord from './container/Admin/dashbord'
import Course from './container/Admin/Coures/coures'
import Student from './container/Admin/Student/student'
import Navbarwrap from './component/Navbar/navbar'
import PrivateRoute from './privateRoute'


function App() {
  const isAuthenticated = useSelector(state => state.authState.isAuthenticated)

  return (
    <div className="App">
      <Navbarwrap isAuthenticated={isAuthenticated} />
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute  exact path="/" component={Deshbord} />
        <PrivateRoute  path="/course" component={Course} />
        <PrivateRoute  path="/student" component={Student} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
