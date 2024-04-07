import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.wrapper}>
      <p>
        Welcome, <span className={css.name}>{user.name}</span>
      </p>
      <button className={css.btn} onClick={handleClick}>
        Logout
      </button>
    </div>
  );
}
