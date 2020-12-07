import React from 'react';
import propTypes from 'prop-types';

function TableRow({ transaction }) {
  return (
    <>
      <th>{transaction.type}</th>
      <th>{transaction.amount}</th>
      <th>{transaction.currency}</th>
    </>
  );
}

TableRow.propTypes = {
  transaction: propTypes.shape({
    type: propTypes.string.isRequired,
    amount: propTypes.string.isRequired,
    currency: propTypes.string.isRequired,
  }).isRequired,
};

export default TableRow;
