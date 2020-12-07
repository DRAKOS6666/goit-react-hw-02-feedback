import React from 'react';
import propTypes from 'prop-types';
import './FriendList.scss';
import FriendListItem from './FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li className="friend-item" key={friend.id}>
          <FriendListItem friendItem={friend} />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({ id: propTypes.number.isRequired }),
  ).isRequired,
};

export default FriendList;
