import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import Friend from './Friend';
import {fetchFriends} from '../actions';

import './FriendsList.css';

const FriendsList = props => {
  useEffect(() => {
    props.fetchFriends();
  }, []);

  return (
    <Fragment>
      {!props.isFetching && props.friends.length > 0 && (
        <div className="FriendsList">
          {props.friends.map(friend => {
            return <Friend key={friend.id} friend={friend} />;
          })}
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = ({friendsReducer}) => ({
  friends: friendsReducer.friends,
  isFetching: friendsReducer.isFetching
});

export default connect(
  mapStateToProps,
  {fetchFriends}
)(FriendsList);
