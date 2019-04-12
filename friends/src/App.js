import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import LoginForm from './components/LoginForm';
import FriendsList from './components/FriendsList';
import './App.css';

const App = props => {
  return (
    <div className="App">
      <Header {...props} />
      <Route exact path="/login" component={LoginForm} />
      <PrivateRoute exact path="/friends" component={FriendsList} />
    </div>
  );
};

const AppWithRouter = withRouter(App);

export default AppWithRouter;
