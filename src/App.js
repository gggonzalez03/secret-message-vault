import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import LoginPage from './components/LoginPage/LoginPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={LoginPage} />
      </div>
    );
  }
}

export default App;
