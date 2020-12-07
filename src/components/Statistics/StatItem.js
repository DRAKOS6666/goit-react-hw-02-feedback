import React from 'react';
import propTypes from 'prop-types';

function StatItem({ statItem }) {
  return (
    <>
      <span className="label">{statItem.label}</span>
      <span className="percentage">{statItem.percentage}%</span>
    </>
  );
}

StatItem.propTypes = {
  statItem: propTypes.shape({
    label: propTypes.string.isRequired,
    percentage: propTypes.number.isRequired,
  }).isRequired,
};

export default StatItem;
