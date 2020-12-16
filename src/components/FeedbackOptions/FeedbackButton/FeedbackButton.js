import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackButton.scss';

function FeedbackButton({ name, handleClick }) {
  return (
    <button className="feedButton" onClick={() => handleClick(name)}>
      {name}
    </button>
  );
}

FeedbackButton.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default FeedbackButton;
