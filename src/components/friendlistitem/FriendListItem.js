import css from "./FriendListItem.module.css";
import PropTypes from 'prop-types';
export const FriendListItem = ({avatar, name, isOnline, id}) => {
    return (
        <li className= {css.item} key={id}>
            <span className= {`${css.status} ${css[isOnline]}`}>{isOnline}</span>
            <img className = "avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className = {css.name}>{name}</p>

        </li>
    )
}
FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name:PropTypes.string,
    isOnline: PropTypes.bool,
  }