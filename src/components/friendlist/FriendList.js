import css from "./FriendList.module.css";
import PropTypes from 'prop-types';
import { FriendListItem } from 'components/friendlistitem/FriendListItem';

export const FriendList = ({friends}) =>{
  return (
    <ul className= {css.friendList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          width="100"
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
friends: {
  avatar:PropTypes.string,
  name: PropTypes.string,
  isONline: PropTypes.bool,
  id: PropTypes.number,
}
}