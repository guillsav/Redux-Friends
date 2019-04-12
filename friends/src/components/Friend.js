import React from 'react';

import './Friend.css';
const Friend = props => {
  const {name, age, email} = props.friend;
  return (
    <div className="Friend">
      <h2>{name}</h2>
      <p>
        <span>age: </span>
        {age}
      </p>
      <p>
        <span>email: </span>
        {email}
      </p>
    </div>
  );
};

export default Friend;
