import './App.css';
import {Switch, Link, Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import React from 'react'

function App() {
  return (
    <div className="App">
    
    <nav>
        <Link to = '/'>Potluck Planner</Link>
        <Link to = '/'>Home</Link>
        <Link to = '/login'>Login</Link>
        <Link to = '/signup'>Sign Up</Link>
        <Link to = '/dashboard'>Dashboard</Link>
    </nav>

    <Switch>
      <PrivateRoute path = '/dashboard' component={Dashboard} />
      <Route path = '/signup'>
          <Signup/>
        </Route>
        <Route path = '/login'>
          <Login/>
        </Route>
        <Route exact path = '/'>
          <Homepage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
