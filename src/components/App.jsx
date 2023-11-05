import { Profile } from 'components/user/Profile';
import { Statistics } from 'components/statistics/Statistics';
import { FriendList } from 'components/friendList/FriendList';
import { TransactionHistory } from 'components/transactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        // fontSize: 40,
        // color: '#010101',
      }}
    >
      <ul>
        <li>
          <Profile />
        </li>

        <li>
          <Statistics title="Upload stats" />
        </li>

        <li>
          <FriendList />
        </li>

        <li>
          <TransactionHistory />
        </li>
      </ul>
    </div>
  );
};
