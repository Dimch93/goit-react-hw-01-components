import transactions from './transactions.json';

export const TransactionHistory = () => {
  return transactions.map(el => (
    // <table class="transaction-history">
    //   <thead>
    //     <tr>
    //       <th>Type</th>

    //       <th>Amount</th>

    //       <th>Currency</th>
    //     </tr>
    //   </thead>

    <tbody key={el.id}>
      <tr>
        <td>{el.type}</td>

        <td>{el.amount}</td>

        <td>{el.currency}</td>
      </tr>
      <tr>
        <td>Withdrawal</td>
        <td>85</td>
        <td>USD</td>
      </tr>
    </tbody>
    // </table>
  ));
};
