import { Profile } from 'components/user/Profile';
import { Statistics } from 'components/statistics/Statistics';
import { FriendList } from 'components/friendList/FriendList';
import { TransactionHistory } from 'components/transactionHistory/TransactionHistory';

import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';

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
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </li>

        <li>
          <Statistics title="Upload stats" stats={data} />
        </li>

        <li>
          <FriendList friends={friends} />
        </li>

        <li>
          <TransactionHistory items={transactions} />;
        </li>
      </ul>
    </div>
  );
};
