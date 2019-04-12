import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import './Header.css';

const Header = props => {
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
  {}
)(Header);
