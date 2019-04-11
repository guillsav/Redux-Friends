import React from 'react';

const Friend = props => {
  const {name, age, email} = props.friend;
  return (
    <div className="Friend">
      <h2>{name}</h2>
      <p>age: {age}</p>
      <p>email: {email}</p>
    </div>
  );
};

export default Friend;
