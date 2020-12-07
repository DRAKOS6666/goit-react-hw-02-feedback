import React from 'react';
import propTypes from 'prop-types';

function FriendListItem({ friendItem }) {
  return (
    <>
      <span
        className="status"
        style={{
          backgroundColor: friendItem.isOnline ? 'green' : 'red',
        }}
      ></span>
      <img className="avatar" src={friendItem.avatar} alt=""></img>
      <p className="name">{friendItem.name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  friendItem: propTypes.shape({
    isOnline: propTypes.bool.isRequired,
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
  }).isRequired,
};

export default FriendListItem;
