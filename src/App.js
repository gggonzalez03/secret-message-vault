import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import MessageVault from './components/MessageVault/MessageVault'
import MessagePage from './components/MessagePage/MessagePage'
import HomePage from './components/HomePage/HomePage'
import WritePage from './components/WritePage/WritePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/write' component={WritePage} />
          <Route path='/:message_id/:token/message/' component={MessagePage} />
          <Route path='/:message_id/:token/' component={MessageVault} />
          <Route path='/' component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
