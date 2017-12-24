import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import LoginPage from './components/LoginPage/LoginPage'
import MessagePage from './components/MessagePage/MessagePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/:user/:token/message/' component={MessagePage} />
          <Route path='/:user/:token/' component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
