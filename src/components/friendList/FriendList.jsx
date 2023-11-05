import friends from './friends.json';
import css from './friendList.module.css';

export const FriendList = () => {
  return friends.map(el => (
    <div className={css.friends} key={el.id}>
      <ul>
        <li className={css.item}>
          <span
            className={el.isOnline ? css.status__true : css.status__false}
          ></span>
          <img
            className={css.avatar}
            src={el.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{el.name}</p>
        </li>
      </ul>
    </div>
  ));
};
