import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import MessageVault from './components/MessageVault/MessageVault'
import MessagePage from './components/MessagePage/MessagePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/:user/:token/message/' component={MessagePage} />
          <Route path='/:user/:token/' component={MessageVault} />
        </Switch>
      </div>
    );
  }
}

export default App;
