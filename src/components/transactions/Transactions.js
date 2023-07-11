import css from "./Transactions.module.css";
import PropTypes from 'prop-types';

export const Transactions = ({items}) => {
    return (
<table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
  {items.map(({id, type , amount, currency}) => {
      return <tr key = {id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    })}
  </tbody>
</table>
    )
}

Transactions.propTypes = {
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency:PropTypes.string,
};