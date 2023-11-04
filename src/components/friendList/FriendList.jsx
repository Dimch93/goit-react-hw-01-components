import friends from './friends.json';

export const FriendList = () => {
  return friends.map(el => (
    <div class="friends" key={el.id}>
      <ul>
        <li class="item">
          <span class="status"></span>
          <img class="avatar" src={el.avatar} alt="User avatar" width="48" />
          <p class="name">{el.name}</p>
        </li>
      </ul>
    </div>
  ));
};
