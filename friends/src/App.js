import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import LoginForm from './components/LoginForm';
import FriendsList from './components/FriendsList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Route exact path="/login" component={LoginForm} />
      <PrivateRoute exact path="/friends" component={FriendsList} />
    </div>
  );
};

export default App;
