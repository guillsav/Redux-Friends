import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

const Header = props => {
  return (
    <div>
      <header>
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
