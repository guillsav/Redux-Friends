import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {logOutUser} from '../actions';

import './Header.css';

const Header = props => {
  const onLogout = () => {
    props.logOutUser().then(props.history.push('/login'));
  };
  return (
    <div className="Header">
      <header>
        <div className="container">
          <div className="logo">
            <h1>Lambda Friends</h1>
          </div>
          <nav>
            {!props.isAuthenticated && <NavLink to="/login">Log in</NavLink>}
            {props.isAuthenticated && <NavLink to="/friends">Friends</NavLink>}
            {props.isAuthenticated && (
              <NavLink to="/friend/new-friend">Add Friend</NavLink>
            )}
            {props.isAuthenticated && (
              <NavLink onClick={onLogout} to="#">
                Log out
              </NavLink>
            )}
          </nav>
        </div>
      </header>
    </div>
  );
};

const mapStateToProps = ({loginReducer}) => {
  return {
    isAuthenticated: loginReducer.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  {logOutUser}
)(Header);
