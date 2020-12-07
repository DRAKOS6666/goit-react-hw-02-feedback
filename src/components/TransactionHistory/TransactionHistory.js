import React from 'react';
import propTypes from 'prop-types';
import './TransactionHistory.scss';
import TableRow from './TableRow';

function TransactionHistory({ transactions }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(action => (
          <tr key={action.id}>
            <TableRow transaction={action} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: propTypes.arrayOf(
    propTypes.shape({ id: propTypes.string.isRequired }),
  ).isRequired,
};

export default TransactionHistory;
