import React from 'react';
import propTypes from 'prop-types';
import './Statistics.scss';

function Statistics({ good, neutral, bad, total, positivePercentage}) {
  return (
    <ul className="statList">
      <li className="statListItem" >Good: <span>{good}</span> </li>
      <li className="statListItem" >Neutral:  <span>{neutral}</span> </li>
      <li className="statListItem" >Bad: <span>{bad}</span> </li>
      <li className="statListItem" >Total: <span>{total}</span> </li>
      <li className="statListItem" >Positive feedback: <span>{positivePercentage} %</span> </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};


export default Statistics;
