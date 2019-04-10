import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/login" component={LoginForm} />
      </div>
    );
  }
}

export default App;
