import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/Login';
import Timeline from './pages/Timeline';

class App extends Component {
  render() {
    return (
      //esses elementos aqui garantem que o usuário siga uma mesma rota mesmo que em endereços diferentes
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/timeline' component={Timeline} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
