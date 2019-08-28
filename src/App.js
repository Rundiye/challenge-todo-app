import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import CreateTodo from './pages/CreateTodo'
import UpdateTodo from './pages/UpdateTodo'

import './App.css';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/createTodo' exact component={CreateTodo}/>
            <Route path='/updateTodo' exact component={UpdateTodo}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
