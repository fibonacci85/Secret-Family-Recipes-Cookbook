import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import HomePage from './components/HomePage';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={HomePage} />
      </Router>
    </div>
  );
}

export default App;
