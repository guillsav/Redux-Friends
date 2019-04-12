import React, {Fragment, useState} from 'react';
import {connect} from 'react-redux';
import {logUser} from '../actions';
import Loader from 'react-loader-spinner';

import './LoginForm.css';

const LoginForm = props => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const onChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    props.logUser(credentials).then(() => props.history.push('/friends'));
  };

  return (
    <Fragment>
      <form className="LoginForm" onSubmit={onSubmit}>
        <div className="form-items">
          <div className="form-header">
            <h2>Log in</h2>
          </div>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              onChange={onChange}
              type="text"
              name="username"
              value={credentials.username}
              placeholder="Enter Username..."
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input
              onChange={onChange}
              type="password"
              name="password"
              value={credentials.password}
              placeholder="Enter Username..."
            />
          </div>
          <button>
            {props.loggingIn ? (
              <Loader type="Oval" color="#fff" height={30} width={30} />
            ) : (
              'Log in'
            )}
          </button>
        </div>
      </form>
    </Fragment>
  );
};

const mapStateToProps = ({loginReducer}) => {
  return {
    loggingIn: loginReducer.loggingIn
  };
};

export default connect(
  mapStateToProps,
  {logUser}
)(LoginForm);
