import React, { useState } from 'react';
import {useSelector} from 'react-redux'
import './App.css';
import Login from './container/login/login'
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './container/Admin/admin'


function App() {
  const[isAuthenticated, setIsAuthentication] = useState(false)
  return (
    <div className="App">
      {
        isAuthenticated ? <Admin setIsAuthentication ={setIsAuthentication}/> :<Login setIsAuthenticated={setIsAuthentication}/>
      }
    </div>
  );
}

export default App;
