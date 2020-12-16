import React from 'react';
import FeedbackButton from './FeedbackButton/FeedbackButton';
import PropTypes from 'prop-types';
import './FeedbackOption.scss';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className="optionContainer">
      {options.map(name => (
        <FeedbackButton key={name} name={name} handleClick={onLeaveFeedback} />
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
